<template>
  <div class="c-video">
    <video ref="videoRef" @click="clickVideo" class="video" src="@/assets/videos/video.mp4" reload></video>
    
    <div ref="orangeBar" class="orange-bar" @click.stop="(event) => setTime(event)">
      <div id="time-line" :style="{ width: `${percentTime}%` }">
        <common-icon id="icon-time-line" name="ellipse" size="7px"/>
      </div>
    </div>

    <div class="content text-white text-size-13">
      <div class="text-size-15">Dieu Linh Tokyo  
        <common-icon id="icon-time-line" name="ellipse" size="3px"/>
        <span class="text-size-13"> 12-06-2022</span>
      </div>
      <div>#Capcut Dieu Linh mentioned you #fyp</div>
      <div>#Capcut #bongda #hocduong.. Readmore</div>
    </div>

    <div class="menu-left text-center">
      <div class="avatar">
        <q-avatar
          size="40px"
          class="overlapping"
        >
          <img :src="`https://cdn.quasar.dev/img/avatar1.jpg`">
        </q-avatar>
      </div>
      <div class="q-mt-lg">
        <common-icon name="heart" size="25px"/>
        <p class="text-white">230</p>
      </div>
      <div class="q-mt-lg">
        <common-icon name="save" size="25px"/>
        <p class="text-white">12</p>
      </div>
      <div class="q-mt-lg">
        <common-icon name="share" size="25px"/>
        <p class="text-white">Share</p>
      </div>
      <div class="q-mt-lg">
        <common-icon name="block" size="25px"/>
        <p class="text-white">Block</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const videoRef = ref<HTMLVideoElement>({} as HTMLVideoElement)
const orangeBar = ref<HTMLElement>({} as HTMLElement)
const percentTime = ref(0);

const clickVideo = () => {
  if(videoRef.value.paused) videoRef.value.play();
  else videoRef.value.pause();
  
}

const setTime = (event: any) => {
  videoRef.value.currentTime = (event.offsetX / orangeBar.value.offsetWidth) * videoRef.value.duration
}

onMounted(() => {
  videoRef.value.addEventListener('timeupdate', () => {
    if(videoRef.value.ended) videoRef.value.play();
    percentTime.value = (videoRef.value.currentTime / videoRef.value.duration) * 100;
  })
})

</script>

<style lang="scss" scoped>
.c-video {
  width: 100%;
  max-width: 390px;
  position: relative;  
  height: 100%;
  .video {
    position: fixed;
    top: 64px;
    height: auto;
    width: 390px;
  }

  .menu-left {
    position: absolute;
    right: 10px;
    top: 30%;
    .avatar {
      border: 2px solid #fff;
      border-radius: 50%;
    }
  }
  .content {
    position: absolute;
    bottom: 120px;
    max-width: 231px;
    margin-left: 17px;
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
      #icon-time-line {
        position: absolute;
        top: -2px;
        right: 0px;
      }
    }
  }
}
</style>