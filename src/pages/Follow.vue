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
import { followService } from '@/services/domains/follow/request'
import { videoService } from '@/services/domains/video/request'
import { getCursorKey } from "@/services/utils/common";
import { useFollowStore } from "@/stores/useFollowStore";
import { useAuthStore } from "@/stores/useAuthStore";
import { storeToRefs } from "pinia";
import { modelService } from "@/services/domains/model/request";

const followStore = useFollowStore()
const authStore = useAuthStore()
const { videoIndex, cursorKey, videosStore } = storeToRefs(followStore)

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

    const liked = videos.value[video.value].liked
    if(liked) videos.value[video.value].likes--;
    else videos.value[video.value].likes++;
    videos.value[video.value].liked = !liked;

    followStore.setVideos(videos.value)
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
    
    followStore.setVideos(videos.value)
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
    followStore.setVideos(videos.value)
  } catch(err) {
    //
  }
  loadingSave.value = false
}

const fetchData = async() => {
  try{
    const res = await followService.getVideosFollow({ cursor: params.value })
    let videosRes = res.items.map((item) => {
      item.liked = userProfile.value.user_data?.liked.includes(item.id)
      item.saved = userProfile.value.user_data?.saved.includes(item.id)
      item.followed = userProfile.value.user_data?.followed.includes(item.id)
      return item
    })
    videosRes = videosRes.filter(el => !authStore.userProfile?.user_data?.blocked.includes(el.id))
    videos.value = [ ...videos.value, ...videosRes ]
    params.value = getCursorKey(res.next_page_url)

    followStore.setVideos(videos.value)
    followStore.setLink(getCursorKey(res.next_page_url))
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
    
    followStore.setVideos(videos.value)
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
  followStore.setVideoValue(video.value)
})
</script>
