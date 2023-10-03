<template>
  <div class="root row justify-center">
    <div class="col-12 col-sm-9 col-md-6 col-xl-6">
      <div class="text-center q-pt-md q-px-md">
        <div class="relative-position">
          <div class="absolute-left">
            <common-icon 
              name="arrow-left" 
              size="22px" 
              @click="$router.go(-1)"
            />
          </div>
          <p class="text-bold text-size-17 text-center">{{ model.name }}</p>
        </div>
        <common-avatar 
          :name="model.name" 
          :image="model.info?.image || 'image/avatar-profile.png'"
          size="120px"
        />
        <p class="text-size-15 q-mt-md">@{{ model.key }}</p>
      </div>

      <div class="row justify-center">
        <div class="col-4 text-center">
          <div class="index-info">{{ minifyNumber(model.followers) }}</div>
          <div class="text-size-13 text-grey-7">Follow</div>
        </div>
        <div class="col-4 text-center relative-position">
          <common-icon class="line absolute-left" name="line" size="17px"/>
          <div class="index-info">{{ minifyNumber(model.likes) }}</div>
          <div class="text-size-13 text-grey-7">Like</div>
          <common-icon name="line" class="line absolute-right" size="17px"/>
        </div>
        <div class="col-4 text-center">
          <div class="index-info">{{ minifyNumber(model.views) }}</div>
          <div class="text-size-13 text-grey-7">View</div>
        </div>
        <div class="col-9 text-center q-my-md">
          <q-btn 
            :label="model.followed ? 'Following' : 'Follow now'" 
            text-color="white" 
            color="red" 
            class="full-width" 
            size="16px" 
            rounded 
            unelevated 
            :disable="loadingAction"
            @click="setFollowModel"
          />
          <div class="q-mt-md q-mb-xs text-uppercase">
            ↗️ Follow me thanks ↖️ 👁👃🏻👁 👅
          </div>
          <div class="content text-size-13 ellipsis-3-lines">
            {{ model.info?.description }}
          </div>
        </div>
      </div>

      <div class="q-mb-md">
        <q-tabs
          v-model="tab"
          no-caps
          narrow-indicator
          align="justify"
          class="bg-white full-width tab"
          :breakpoint="0"
        >
          <q-tab v-for="(item, key) in actions" :key="key" :name="item.name"> 
            <common-icon :name="`${item.icon}${tab === item.name ? '-bold' : ''}`"/>
          </q-tab>
        </q-tabs>
        <q-separator />
      </div>

      <q-infinite-scroll @load="onLoad" :offset="250">
        <q-tab-panels v-model="tab" animated class="tab-panels">
          <q-tab-panel v-for="(items, key) in dataModel" :name="key" :key="key" class="q-pa-none">
            <div v-if="!items.length" class="text-center">
              <img style="width: 150px" src="@/assets/icons/not-found.svg" />
            </div>
            <div v-else class="col-12 row list-item">
              <div v-for="(item, key) in items" :key="key" class="col-6 col-sm-4 text-size-13 card">
                <common-card :data="item"/>
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
import { computed, onMounted, ref } from "vue";
import { modelService } from '@/services/domains/model/request'
import { useRoute } from "vue-router";
import type { Model } from "@/models/model";
import type { Video } from "@/models/video";
import { getCursorKey } from "@/services/utils/common";
import { minifyNumber } from "@/services/utils/common";
import { useAuthStore } from "@/stores/useAuthStore";

const authStore = useAuthStore()
const route = useRoute()
const tab = ref('news');
const modelId = Number((route.params as any).id || 0);
const model = ref({} as Model);
const videosNew = ref<Video[]>([])
const videosLiked = ref<Video[]>([])
const paramsVideoNew = ref('')
const paramsVideoLiked = ref('')
const loadingAction = ref(false)

const actions = [
  { name: 'news', icon: 'video-play' },
  { name: 'likes',  icon: 'heart-search' },
]

const dataModel = computed(() => {
  return {
    news: videosNew.value,
    likes: videosLiked.value
  }
})

const onLoad = async(index: number, done: any) => {
  if(tab.value == 'news' && paramsVideoNew.value) {
    await fetchVideosNew();
  } else if(tab.value == 'likes' && paramsVideoLiked.value) {
    await fetchVideosLiked();
  }
  done()
}

const setFollowModel = async() => {
  try {
    loadingAction.value = true
    await modelService.followModel(modelId);
    authStore.setUserAction(model.value.followed || false, 'followed', modelId)
    model.value.followed = !model.value.followed
    model.value.followers ++
  } catch(err) {
    //
  }
  loadingAction.value = false
}

const fetchDataModel = async() => {
  try {
    model.value = await modelService.getModelDetail(modelId);
    if(authStore.isAuthenticated) model.value.followed = authStore.userProfile?.user_data?.followed.includes(Number(modelId))
  } catch(err) {
    //
  }
}

const fetchVideosNew = async() => {
  try {
    const res = await modelService.getVideoNew(modelId, { cursor: paramsVideoNew.value });
    videosNew.value = [ ...videosNew.value, ...res.items ]
    paramsVideoNew.value = getCursorKey(res.next_page_url)
  } catch(err) {
    //
  }
}

const fetchVideosLiked = async() => {
  try {
    const res = await modelService.getModelLiked(modelId, { cursor: paramsVideoLiked.value });
    videosLiked.value = [ ...videosLiked.value, ...res.items ]
    paramsVideoLiked.value = getCursorKey(res.next_page_url)
  } catch(err) {
    //
  }
}

onMounted(async()=> {
  await fetchDataModel()
  await fetchVideosNew()
  await fetchVideosLiked()
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
.index-info {
  font-weight: 700;
  font-size: 20px;
}
.line {
  top: 35%
}
</style>

<style lang="scss"> 
.tab-panels {
  .q-panel {
    overflow: hidden;
  }
}
</style>