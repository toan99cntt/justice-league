<template>
  <watch-mobile-video
    v-model="video"
    v-model:videos="videos"
    :change="change"
    :loadingLike="loadingLike"
    :loadingSave="loadingSave"
    :loadingHide="loadingHide"
    :loadingFollow="loadingFollow"
    @on-block="hideVideo"
    @on-like="likeVideo"
    @on-save="saveVideo"
    @on-follow="followModel"
    @fetch-data="fetchData()"
  />
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted } from "vue";
import WatchMobileVideo from "@/components/home/WatchMobileVideo.vue"
import type { Video } from "@/models/video";
import { homeService } from '@/services/domains/home/request'
import { videoService } from '@/services/domains/video/request'
import { getCursorKey } from "@/services/utils/common";
import { useHomeStore } from "@/stores/useHomeStore";
import { useAuthStore } from "@/stores/useAuthStore";
import { storeToRefs } from "pinia";
import { modelService } from "@/services/domains/model/request";

const homeStore = useHomeStore()
const authStore = useAuthStore()
const { videoIndex, cursorKey, videosStore } = storeToRefs(homeStore)

const videos = ref<Array<Video>>(videosStore.value)
const userProfile = ref({...authStore.userProfile})
const video = ref(videoIndex.value);
const params = ref(cursorKey.value);
const change = ref(1);
const loadingLike = ref(false)
const loadingSave = ref(false)
const loadingHide = ref(false)
const loadingFollow = ref(false)

const likeVideo = async(id: number)=>{
  try {
    loadingLike.value = true
    await videoService.actionLike(id)
    const liked = videos.value[video.value].liked || false

    if(liked) videos.value[video.value].likes--;
    else videos.value[video.value].likes++;

    authStore.setUserAction(liked, 'liked', id)
    videos.value[video.value].liked = !liked;
    homeStore.setVideos(videos.value)
  } catch(err) {
    //
  }
  loadingLike.value = false
}

const saveVideo = async (id: number)=>{
  try {
    loadingSave.value = true
    await videoService.actionSave(id)
    const saved = videos.value[video.value].saved || false;

    if(saved) videos.value[video.value].saves--;
    else videos.value[video.value].saves ++;

    authStore.setUserAction(saved, 'saved', id)
    videos.value[video.value].saved = !saved;

    homeStore.setVideos(videos.value)
  } catch(err) {
    //
  }
  loadingSave.value = false
}

const hideVideo = async (id: number)=>{
  try {
    loadingSave.value = true
    await videoService.actionHide(id)
    // videos.value.splice(video.value, 1);
    authStore.setUserAction(false, 'blocked', id)

    if(video.value == (videos.value.length - 1)) video.value --
    else change.value++   
    homeStore.setVideos(videos.value)
  } catch(err) {
    //
  }
  loadingSave.value = false
}

const fetchData = async() => {
  try{
    const res = await homeService.getVideos({ cursor: params.value })
    let videosRes = res.items.map((item) => {
      item.liked = userProfile.value.user_data?.liked.includes(item.id)
      item.saved = userProfile.value.user_data?.saved.includes(item.id)
      item.followed = userProfile.value.user_data?.followed.includes(item.id)
      return item
    })
    videosRes = videosRes.filter(el => !authStore.userProfile?.user_data?.blocked?.includes(el.id))
    videos.value = [ ...videos.value, ...videosRes ]
    params.value = getCursorKey(res.next_page_url)

    homeStore.setVideos(videos.value)
    homeStore.setLink(getCursorKey(res.next_page_url))
  } catch(err) {
    //
  }
} 

const followModel = async(id: number) => {
  try {
    loadingFollow.value = true
    await modelService.followModel(id);
    videos.value[video.value].followed = true;
    authStore.setUserAction(false, 'followed', id)
    
    homeStore.setVideos(videos.value)
  } catch(err) {
    //
  }
  loadingFollow.value = false
}

onMounted( async () => {
  if(videosStore.value.length) {
    if(authStore.isAuthenticated) {
      videos.value.map(el => {
        el.followed = authStore.userProfile?.user_data?.followed?.includes(el.model_id) || false
        return el
      })
    }
    return;
  }
  await fetchData();
})

onUnmounted(() => {
  homeStore.setVideoValue(video.value)
})
</script>
