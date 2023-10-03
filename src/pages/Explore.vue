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
import { onMounted, onUnmounted, ref } from "vue";
import WatchMobileVideo from "@/components/home/WatchMobileVideo.vue"
import type { Video } from "@/models/video";
import { exploreService } from '@/services/domains/explore/request'
import { getCursorKey } from "@/services/utils/common";
import { useExploreStore } from "@/stores/useExploreStore";
import { storeToRefs } from "pinia";
import { videoService } from "@/services/domains/video/request";
import { useAuthStore } from "@/stores/useAuthStore";
import { modelService } from "@/services/domains/model/request";

const exploreStore = useExploreStore()
const authStore = useAuthStore()
const { videoIndex, cursorKey, videosStore } = storeToRefs(exploreStore)

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

    exploreStore.setVideos(videos.value)
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
    
    exploreStore.setVideos(videos.value)
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
    exploreStore.setVideos(videos.value)
  } catch(err) {
    //
  }
  loadingSave.value = false
}

const fetchData = async() => {
  try{
    const res = await exploreService.getVideos({ cursor: params.value })
    let videosRes = res.items.map((item) => {
      item.liked = userProfile.value.user_data?.liked.includes(item.id)
      item.saved = userProfile.value.user_data?.saved.includes(item.id)
      item.followed = userProfile.value.user_data?.followed.includes(item.id)
      return item
    })
    videosRes = videosRes.filter(el => !authStore.userProfile?.user_data?.blocked.includes(el.id))
    videos.value = [ ...videos.value, ...videosRes ]
    params.value = getCursorKey(res.next_page_url)

    exploreStore.setVideos(videos.value)
    exploreStore.setLink(getCursorKey(res.next_page_url))
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
    
    exploreStore.setVideos(videos.value)
  } catch(err) {
    //
  }
  loadingFollow.value = false
}

onMounted( async () => {
  if(videosStore.value.length) return;
  await fetchData();
})

onUnmounted(() => {
  exploreStore.setVideoValue(video.value)
})
</script>
