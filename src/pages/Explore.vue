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
import { onMounted, onUnmounted, ref } from "vue";
import WatchMobileVideo from "@/components/home/WatchMobileVideo.vue"
import type { Video } from "@/models/video";
import { exploreService } from '@/services/domains/explore/request'
import { getCursorKey } from "@/services/utils/common";
import { useExploreStore } from "@/stores/useExploreStore";
import { storeToRefs } from "pinia";

const exploreStore = useExploreStore()
const { videoIndex, cursorKey, videosStore } = storeToRefs(exploreStore)

const videos = ref<Array<Video>>(videosStore.value)
const video = ref(videoIndex.value);
const params = ref(cursorKey.value);

const likeVideo = async()=>{
  //
}

const saveVideo = ()=>{
//
}

const blockVideo = ()=>{
//
}

const fetchData = async() => {
  try{
    const res = await exploreService.getVideos({ cursor: params.value })
    videos.value = [ ...videos.value, ...res.items ]
    params.value = getCursorKey(res.next_page_url)

    exploreStore.setVideos(videos.value)
    exploreStore.setLink(getCursorKey(res.next_page_url))
  } catch(err) {
    //
  }
} 

onMounted( async () => {
  if(videosStore.value.length) return;
  await fetchData();
})

onUnmounted(() => {
  exploreStore.setVideoValue(video.value)
})
</script>
