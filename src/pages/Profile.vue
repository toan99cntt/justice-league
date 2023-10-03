<template>
  <div class="root row justify-center">
    <div class="col-12 col-sm-9 col-md-6 col-xl-6">
      <div class="text-center q-pt-md">
        <p class="text-bold text-size-17">{{ userProfile.name || 'noName' }}</p>
        <q-avatar size="120px">
          <img src="@/assets/images/avatar.png">
        </q-avatar>
        <p class="text-size-15">@{{ userProfile.name || 'noName' }}</p>
      </div>
      <div class="q-mb-md">
        <q-tabs
          v-model="tab"
          no-caps
          narrow-indicator
          align="justify"
          class="text-white full-width tab"
          :class="{ 'text-grey-8 bg-white': $route.name !== 'home'}"
          :breakpoint="0"
        >
          <q-tab v-for="(item, key) in actions" :key="key" :name="item.name"> 
            <common-icon :name="item.icon" size="21px"/>
            <p class="text-size-13">{{item.label}}</p>
          </q-tab>
        </q-tabs>
        <q-separator />
      </div>
      <q-infinite-scroll @load="onLoad" :offset="250">
        <q-tab-panels v-model="tab" class="tab-panels">
          <q-tab-panel 
            v-for="(items, key) in dataMyPage"
            :key="key"
            :name="key" 
            style="height: auto"
            class="q-pa-none"
          >
            <div v-if="!items.length" class="text-center">
              <img style="width: 150px" src="@/assets/icons/not-found.svg" />
            </div>
            <div v-else>
              <div v-if="tab == TAB_FOLLOW" class="row justify-center">
                <q-list class="col-12 col-sm-10 col-md-8">
                  <q-item v-for="item in videosFollow" :key="item.id" class="q-my-sm" clickable v-ripple>
                    <q-item-section avatar>
                      <common-avatar 
                        :name="item.name" 
                        :image="item.info.image"
                        size="50px"
                      />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-bold ellipsis">{{ item.name }}</q-item-label>
                      <q-item-label caption class="ellipsis" lines="1">{{ item.key }}</q-item-label>
                    </q-item-section>

                    <q-item-section side>
                      <q-btn unelevated no-caps color="grey-4" label="Follow" size="11px" text-color="black"/>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
              <div v-else  class="col-12 row list-item">
                <div 
                  v-for="item in items" 
                  :key="item.id"  
                  class="col-6 col-sm-4 col-lg-3 text-size-13 card"
                >
                  <common-card disableClickName :data="item"/>
                </div>
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>

        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner color="grey" size="30px" />
          </div>
        </template>
      </q-infinite-scroll>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/useAuthStore";
import { storeToRefs } from "pinia";
import { ref, onMounted, computed } from "vue";
import { myPageService } from "@/services/domains/my-page/request"
import { getCursorKey } from "@/services/utils/common";
import type { Video } from "@/models/video";
import type { UserFollow } from "@/models/user";

const TAB_FOLLOW = 'follows'

const authStore = useAuthStore();
const {userProfile} = storeToRefs(authStore);

const tab = ref('follows');
const cursorFollow = ref('')
const cursorLike = ref('')
const cursorHide = ref('')
const cursorSave = ref('')
const videosFollow = ref<UserFollow[]>([])
const videosLike = ref<Video[]>([])
const videosHide = ref<Video[]>([])
const videosSave = ref<Video[]>([])

const actions = [
  { name: 'follows', label: 'Follow', icon: 'magic-bold' },
  { name: 'likes', label: 'Liked', icon: 'heart-gray' },
  { name: 'saves', label: 'Saved', icon: 'save-gray' },
  { name: 'hides', label: 'Hide/Block', icon: 'block-gray' },
]

const dataMyPage = computed(() => {
  return {
    follows: videosFollow.value,
    likes: videosLike.value,
    saves: videosSave.value,
    hides: videosHide.value
  }
})

const onLoad = async(index: number, done: any) => {
  if(tab.value == 'follows' && cursorFollow.value) {
    await fetchDataFollowList();
  } else if(tab.value == 'likes' && cursorLike.value) {
    await fetchDataLikeList();
  } else if(tab.value == 'saves' && cursorSave.value) {
    await fetchDataSaveList();
  } else if(tab.value == 'hides' && cursorHide.value) {
    await fetchDataHideList();
  }
  done()
}

const fetchDataLikeList = async() => {
  try {
    const res = await myPageService.getLikeList({
      cursor: cursorLike.value
    })
    videosLike.value = [...videosLike.value, ...res.items] 
    
    cursorLike.value = !checkCursor(cursorLike.value, res.next_page_url) ? getCursorKey(res.next_page_url) : ''
  } catch(err) {
    cursorLike.value = ''
  }
}

const fetchDataFollowList = async() => {
  try {
    const res = await myPageService.getFollowList({
      cursor: cursorLike.value
    })
    videosFollow.value = [...videosFollow.value, ...res.items]
    cursorFollow.value = getCursorKey(res.next_page_url)
  } catch(err) {
    cursorFollow.value = ''
  }
}

const fetchDataHideList = async() => {
  try {
    const res = await myPageService.getHideList({
      cursor: cursorHide.value
    })
    videosHide.value = [...videosHide.value, ...res.items]
    cursorHide.value = getCursorKey(res.next_page_url)
  } catch(err) {
    cursorHide.value = ''
  }
}

const fetchDataSaveList = async() => {
  try {
    const res = await myPageService.getSaveList({
      cursor: cursorSave.value
    })
    videosSave.value = [...videosSave.value, ...res.items]
    cursorSave.value = getCursorKey(res.next_page_url)
  } catch(err) {
    cursorSave.value = ''
  }
}

const checkCursor = (codeOld: string, codeNew:string) => {
  return (!!codeNew && getCursorKey(codeNew) === codeOld) || !codeNew || codeNew == null
}

onMounted(async()=> {
  await fetchDataFollowList()
  await fetchDataLikeList()
  await fetchDataSaveList()
  await fetchDataHideList()
})
</script>

<style lang="scss" scoped>
.root {
  margin-top: 74px;
  padding-bottom: 100px;
}
.list-item {
  padding: 0px 5px
}
.card {
  padding: 5px
}
</style>
<style lang="scss"> 
.tab-panels {
  .q-panel {
    overflow: hidden;
  }
}
</style>