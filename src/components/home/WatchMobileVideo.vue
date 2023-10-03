<template>
  <div ref="scrollScreen" class="scroll-snap-container fullscreen" :style="{height: `${heightVideo}px !important`}" @scroll="onScroll">
    <div ref="containerRef" 
      v-for="(item, key) in videoPlays" 
      :key="key" 
      :id="`video-${key}`"
      :style="{ backgroundImage: `url(${item.image})`}" 
      class="item container q-pa-none" 
      @click="clickVideo()"
    >
      <div class="c-video text-center" :style="{height: `${heightVideo}px !important`}">
        <common-icon v-show="statusVideo.paused" size="60px" class="absolute-center" style="z-index: 9999; opacity: 0.5;" name="play"/>
        <q-spinner-dots v-if="statusVideo.loading" class="absolute-center" color="white" size="40px" />
        <video ref="videoRef" 
          class="video" 
          :style="{height: `${heightVideo}px !important`}"
          reload
          playsinline 
          autoplay muted loop 
          :poster="item.image"
        ></video>
      
        <div v-show="statusVideo.paused "  ref="orangeBar" class="orange-bar" >
          <q-slider
            :model-value="percentTime"
            @change="setTime"
            :min="0"
            :max="100"
            :step="0.1"
            color="white"
            track-size="3px"
            thumb-size="10px"
          />
        </div>
  
        <div class="content text-white text-size-13 text-left">
          <div class="text-size-15">{{ item.user_name }} 
            <common-icon id="icon-time-line" name="ellipse" size="3px"/>
            <span class="text-size-13"> {{ formatDate(item.published_date) }}</span>
          </div>
          <div>#{{ item.hashtag }}</div>
          <div>{{ item.description.slice(0, countTextShow) }}
            <div v-show="item.description.length > MAXIMUM_TEXT" >
              <span v-if="countTextShow == MAXIMUM_TEXT" @click.stop="countTextShow = -1">... Readmore </span>
              <span v-else @click.stop="countTextShow = MAXIMUM_TEXT"> Hide</span>
            </div>
          </div>
        </div>
  
        <div class="menu-left text-center shadow-icon">
          <div class="relative-position" @click.stop="$router.push({ name: 'modelDetail', params: { id: item.model_id } })">
            <common-avatar 
              :name="item.user_name" 
              :image="item.image"
              size="45px"
            />
            <div v-if="!item.followed" class="btn-follow full-width" :class="{'disable': loadingFollow}" @click.stop="$emit('onFollow', item.model_id)">
              <q-icon name="add_circle" color="white cursor-pointer" size="18px" />
            </div>
          </div>
          <div class="q-mt-md">
            <q-btn round flat no-caps @click.stop="action('onLike', item.id)" :disable="loadingLike">
              <common-icon name="heart" size="25px" :color="item.liked ? 'red' : 'white'"/>
            </q-btn>
            <p class="text-white">{{ minifyNumber(item.likes) }}</p>
          </div>
          <div class="q-mt-md">
            <q-btn round flat no-caps @click.stop="action('onSave', item.id)" :disable="loadingSave">
              <common-icon name="save" size="25px" :color="item.saved ? 'primary' : 'white'"/>
            </q-btn>
            <p class="text-white">{{ minifyNumber(item.saves) }}</p>
          </div>
          <div class="q-mt-md">
            <q-btn round flat no-caps>
              <common-icon name="share" size="25px"/>
            </q-btn>
            <p class="text-white">Share</p>
          </div>
          <div class="q-mt-md">
            <q-btn round flat no-caps @click.stop="action('onBlock', item.id)" :disable="loadingHide">
              <common-icon name="block" size="25px"/>
            </q-btn>
            <p class="text-white">Hide</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, watch, type PropType, reactive, computed, watchEffect, onMounted } from 'vue';
import type { Video } from '@/models/video';
import { useAuthStore } from '@/stores/useAuthStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { FETCH_VIDEO } from '@/constant/common'
import { formatDate } from '@/services/utils/date';
import Hls from 'hls.js';
import { minifyNumber } from "@/services/utils/common";
import { useQuasar } from 'quasar'

const MAXIMUM_TEXT = 80
const SCREEN_SIZE = window.innerHeight - 120
const emits = defineEmits(['update:modelValue','update:videos', 'onLike', 'onSave', 'onBlock', 'fetchData', 'onFollow'])
const props = defineProps({
  videos: {
    type: Array as PropType<Array<Video>>,
    default: () => []
  },
  modelValue: {
    type: Number,
    default: 0
  },
  change: {
    type: Number,
    default: 0
  },
  loadingLike: {
    type: Boolean,
    default: false
  },
  loadingHide: {
    type: Boolean,
    default: false
  },
  loadingSave: {
    type: Boolean,
    default: false
  },
  loadingFollow: {
    type: Boolean,
    default: false
  },
})

const $q = useQuasar()  
const router = useRouter()
const authStore = useAuthStore();
const {isAuthenticated} = storeToRefs(authStore);

const videoRef = ref<Array<HTMLVideoElement>>([])
const orangeBar = ref<Array<HTMLElement>>([])
const scrollScreen = ref<HTMLElement | null>(null)
const showFullDescription = ref(false);
const countTextShow = ref(MAXIMUM_TEXT)
const statusVideo = reactive({
  loading: true,
  error: false,
  paused: false,
})
const percentTime = ref(0);
const videoWatched = ref<Number[]>([])
const heightVideo = ref(SCREEN_SIZE)

const slide = computed({
  get: () => props.modelValue,
  set: (val: Number | String) => emits("update:modelValue", val)
})
const videoPlays = computed({
  get: () => props.videos,
  set: (val) => emits("update:videos", val)
})

let timeout: any;
function debounce(func: any, delay: number) {
  clearTimeout(timeout);
  timeout = setTimeout(func, delay);
}

function onScroll(event: any) {
  debounce(() => {
    const domVideo = document.getElementsByClassName('c-video') as any
    const containerScrollLeft = event.target.scrollTop;
    if(!containerScrollLeft) {
      slide.value = 0
      return
    } else {
      const snappedIndex = Math.floor(containerScrollLeft / domVideo[0].offsetHeight);
      slide.value = snappedIndex;
    }
  }, 100)
}

const clickVideo = () => {
  if(!videoRef.value[slide.value]) return
  const paused = videoRef.value[slide.value].paused;
  if(paused) videoRef.value[slide.value].play();
  else videoRef.value[slide.value].pause();
  statusVideo.paused = !paused;
}

const addEvent = () => {
  statusVideo.loading = true;
  videoRef.value[slide.value].addEventListener('timeupdate', () => {
    if(videoRef.value.length) percentTime.value = (videoRef.value[slide.value].currentTime / videoRef.value[slide.value].duration) * 100;
  })

  videoRef.value[slide.value].addEventListener('loadeddata', () => {
    statusVideo.loading = false
  }, false)
}

const setDisplayVideo = (index: number) => {
  console.log(videoPlays.value);
  
  const src = videoPlays.value[index].stream_url;
  
  if(Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(src)
    hls.attachMedia(videoRef.value[index]);
    hls.on(Hls.Events.ERROR, () => {
      statusVideo.error = true
    });
  } else if (videoRef.value[index].canPlayType('application/vnd.apple.mpegurl')) {
    videoRef.value[index].src = src;
  }
  videoRef.value[index].addEventListener('error', function(evt) {
    statusVideo.error = true // Object
  });
  videoWatched.value.push(videoPlays.value[index].id)
}

const setTime = async(evt: number) => {
  if(!videoRef.value[slide.value]) return
  videoRef.value[slide.value].currentTime = (evt * videoRef.value[slide.value].duration) / 100
  await clickVideo()
}

const action = async (type: 'onLike'|'onSave'|'onBlock', id: number ) =>{ 
  if(!isAuthenticated.value) await router.push({ name: 'login' })
  if(type == 'onBlock') {
    videoPlays.value.splice(slide.value, 1)
    videoWatched.value = videoWatched.value.filter((el) => el == id)
  }
  emits(type, id);
}

const loadVideo = () => {
  if(!videoRef.value[slide.value]) return
  if(videoWatched.value.includes(videoPlays.value[slide.value].id)) {
    videoRef.value[slide.value].play()
    return
  }
  
  setDisplayVideo(slide.value)
  addEvent()
}

watchEffect(() => {
  if(videoPlays.value.length) {
    loadVideo()
  }
})

watch(() => $q.screen.height, () => {
  heightVideo.value = window.innerHeight - 120
})

const setDefaultValue = (index: number) => {
  percentTime.value = 0;
  statusVideo.error = false;
  statusVideo.paused = false;
  countTextShow.value = MAXIMUM_TEXT
  showFullDescription.value = false
  videoRef.value[index].pause();
  videoRef.value[index].currentTime = 0;
}

watch(() => slide.value, async(valNew, valOld) => {
  setDefaultValue(valOld)
  if(valNew >= ((videoPlays.value.length - 1) - FETCH_VIDEO)) emits('fetchData')
})

onMounted(() => {
  if(slide.value) {
    const el = document.getElementById(`video-${slide.value}`)
    el?.scrollIntoView()
  }
})
</script>

<style lang='scss' scoped>
.videos {
  box-sizing: border-box;
}
.container {
  width: 100%;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.8);
  overflow: hidden;
  position: relative;
  z-index: 1;
  background-image: url('@/assets/images/bg.png');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.c-video {
  width: 100%;
  height: 100%;
  position: relative;
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
    z-index: 9999;
    .avatar {
      border-radius: 50%;
    }
    .btn-follow {
      position: absolute;
      bottom: -10px;
    }
    .disable {
      pointer-events: none;
    }
  }
  .content {
    position: absolute;
    bottom: 50px;
    z-index: 9999;
    max-width: 250px;
    margin-left: 17px;
    #icon-time-line {
      margin: 0 2px;
      display: inline;
    }
  }
  .orange-bar {
    width: 100%;
    height: 15px;
    z-index: 9999;
    position: absolute;
    bottom: 16px;
    display: flex;
    align-items: center;
  }
}
</style>
