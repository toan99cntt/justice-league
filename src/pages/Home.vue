<template>
  <watch-mobile-video
    v-model="video"
    :videos="videos"
    @on-block="blockVideo"
    @on-like="likeVideo"
    @on-save="saveVideo"
    @fetch-data="fetchData()"
  />
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted } from "vue";
import WatchMobileVideo from "@/components/home/WatchMobileVideo.vue"
import type { Video } from "@/models/video";
import { homeService } from '@/services/domains/home/request'
import { getCursorKey } from "@/services/utils/common";
import { useHomeStore } from "@/stores/useHomeStore";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore()
const { videoIndex, cursorKey, videosStore } = storeToRefs(homeStore)


const videos = ref<Array<Video>>(videosStore.value)
const video = ref(videoIndex.value);
const params = ref(cursorKey.value);

const likeVideo = async()=>{
  //
}

const saveVideo = ()=>{
}

const blockVideo = ()=>{
//
}

const fetchData = async() => {
  try{
    const res = await homeService.getVideos({ cursor: params.value })
    videos.value = [ ...videos.value, ...res.items ]
    params.value = getCursorKey(res.next_page_url)

    homeStore.setVideos(videos.value)
    homeStore.setLink(getCursorKey(res.next_page_url))
  } catch(err) {
    //
  }
} 

onMounted( async () => {
  if(videosStore.value.length) return;
  await fetchData();
})

onUnmounted(() => {
  homeStore.setVideoValue(video.value)
})
</script>
