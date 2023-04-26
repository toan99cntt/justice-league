<template>
  <q-carousel
    v-model="slide"
    v-model:fullscreen="isFullscreen"
    vertical
    transition-prev="slide-down"
    transition-next="slide-up"
    swipeable
    animated
    class="videos"
    @wheel="nextVideo"
  >
    <q-carousel-slide ref="containerRef" :img-src="item.image" class="container q-pa-none" v-for="(item, key) in videos" :key="key" :name="key">
      <div class="c-video text-center">
        <q-icon v-show="!statusVideo.error && !statusVideo.loading && statusVideo.paused" class="absolute-center" name="play_arrow" size="46px" color="white"/>
        <q-icon v-if="statusVideo.error" class="absolute-center" name="warning" size="35px" color="white"/>
        <q-spinner-dots v-else-if="!statusVideo.error && statusVideo.loading" class="absolute-center" color="white" size="40px" />
      <video ref="videoRef" class="video" @click="clickVideo()" reload playsinline></video>
      
      <div ref="orangeBar" class="orange-bar" @click.stop="(event) => setTime(event)">
        <div id="time-line" :style="{ width: `${percentTime}%` }">
          <!-- <common-icon id="icon-time-line" name="ellipse" size="7px"/> -->
        </div>
      </div>

      <div class="content text-white text-size-13 text-left">
        <div class="text-size-15">{{ item.user_name }} 
          <common-icon id="icon-time-line" name="ellipse" size="3px"/>
          <span class="text-size-13"> {{ formatDate(item.published_date) }}</span>
        </div>
        <div>#{{ item.hashtag }}</div>
        <div v-if="!showFullDescription">{{ item.description.slice(0, 30) }} <span @click="showFullDescription = true">... Readmore</span></div>
        <div v-else>{{ item.description }}</div>
      </div>

      <div class="menu-left text-center">
        <div class="avatar">
          <q-avatar
            size="40px"
            class="overlapping"
          >
            <img :src="item.image">
          </q-avatar>
        </div>
        <div class="q-mt-md">
          <q-btn round flat no-caps @click="action('like')">
            <common-icon name="heart" size="25px"/>
          </q-btn>
          <p class="text-white">{{ item.likes }}</p>
        </div>
        <div class="q-mt-md">
          <q-btn round flat no-caps @click="action('save')">
            <common-icon name="save" size="25px"/>
          </q-btn>
          <p class="text-white">{{ item.saves }}</p>
        </div>
        <div class="q-mt-md">
          <q-btn round flat no-caps>
            <common-icon name="share" size="25px"/>
          </q-btn>
          <p class="text-white">Share</p>
        </div>
        <div class="q-mt-md">
          <q-btn round flat no-caps @click="action('block')">
            <common-icon name="block" size="25px"/>
          </q-btn>
          <p class="text-white">Block</p>
        </div>
      </div>
    </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script setup lang='ts'>
import { ref, watch, type PropType, reactive, computed } from 'vue';
import type { Video } from '@/models/video';
import { useAuthStore } from '@/stores/useAuthStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { FETCH_VIDEO } from '@/constant/common'
import { formatDate } from '@/services/utils/date';
import Hls from 'hls.js';

const emits = defineEmits(['update:modelValue', 'onLike', 'onSave', 'onBlock', 'fetchData'])
const props = defineProps({
  videos: {
    type: Array as PropType<Array<Video>>,
    default: () => []
  },
  modelValue: {
    type: Number,
    default: 0
  }
})

const router = useRouter()
const authStore = useAuthStore();
const {isAuthenticated} = storeToRefs(authStore);

const videoRef = ref<Array<HTMLVideoElement>>([])
const orangeBar = ref<Array<HTMLElement>>([])
const showFullDescription = ref(false);
const statusVideo = reactive({
  loading: true,
  error: false,
  paused: false,
})
const percentTime = ref(0);
const isFullscreen = ref(true);
const wheelTimer = ref(0);

const slide = computed({
  get: () => props.modelValue,
  set: (val: Number | String) => emits("update:modelValue", val)
})

const clickVideo = () => {
  if(!videoRef.value[0]) return
  const paused = videoRef.value[0].paused;
  if(paused) videoRef.value[0].play();
  else videoRef.value[0].pause();
  statusVideo.paused = !paused;
}

const addEvent = () => {
  videoRef.value[0].addEventListener('timeupdate', () => {
    if(videoRef.value[0].ended) videoRef.value[0].play();
    percentTime.value = (videoRef.value[0].currentTime / videoRef.value[0].duration) * 100;
  })

  videoRef.value[0].addEventListener('loadeddata', () => {
    statusVideo.loading = false
  }, false)
}

const setDisplayVideo = () => {
  const src = props.videos[slide.value].stream_url;
  if(Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(src)
    hls.attachMedia(videoRef.value[0]);
    hls.on(Hls.Events.ERROR, () => {
      statusVideo.error = true
    });
  } else if (videoRef.value[0].canPlayType('application/vnd.apple.mpegurl')) {
    videoRef.value[0].src = src;
  }
  videoRef.value[0].addEventListener('loadedmetadata',function() {
    videoRef.value[0].play();
  });
}

const setTime = (event: any) => {
  if(!videoRef.value[0]) return
  videoRef.value[0].currentTime = (event.offsetX / orangeBar.value[0].offsetWidth) * videoRef.value[0].duration
}

const action = async (type: 'like'|'save'|'block'  ) =>{
  if(!isAuthenticated.value) await router.push({ name: 'login' })
  if(type ==='like') emits('onLike');
  else if(type ==='save') emits('onSave');
  else if(type ==='block') emits('onBlock');
}

const nextVideo = (e: any)=>{
  clearTimeout(wheelTimer.value);
  wheelTimer.value = setTimeout(() => {
    if(!e.deltaY) return

    const delta = e.deltaY;
    if (delta > 0) {
      if(slide.value >= (props.videos.length - 1)) return;
      slide.value ++;
    }
    else {
      if(!slide.value) return;
      slide.value --;
    }
  }, 80)
}

watch(() => Object.keys(videoRef.value).length, () => {
  if(!videoRef.value[0]) return
  percentTime.value = 0;
  setDisplayVideo()
  addEvent()
})

watch(() => slide.value, async(val) => {
  statusVideo.loading = true;
  statusVideo.error = false;
  statusVideo.paused = false;
  showFullDescription.value = false
  if((val + FETCH_VIDEO) === (props.videos.length - 1)) emits('fetchData')
})
</script>

<style lang='scss' scoped>
.videos {
  height: 100%;
}
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background-image: url('@/assets/images/bg.png');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.c-video {
  width: 100%;
  height: 100%;
  background: rgba(17, 17, 17, 0.85);
  backdrop-filter: blur(7.5px);
  .video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .menu-left {
    position: absolute;
    right: 10px;
    bottom: 100px;
    .avatar {
      border: 2px solid #fff;
      border-radius: 50%;
    }
  }
  .content {
    position: absolute;
    bottom: 120px;
    max-width: 250px;
    margin-left: 17px;
    #icon-time-line {
      margin: 0 2px;
      display: inline;
    }
  }
  .orange-bar {
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 90px;
    background: rgba(255, 255, 255, 0.2);
    #time-line {
      background: #fff;
      height: 100%;
      width: 20px;
      position: relative;
    }
  }
}
</style>
