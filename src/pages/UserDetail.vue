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
          <p class="text-bold text-size-17 text-center">Dieu Linh Tokyo</p>
        </div>
        <q-avatar size="120px">
          <img src="@/assets/images/avatar-profile.png">
        </q-avatar>
        <p class="text-size-15 q-mt-md">@dieulin2k6</p>
      </div>

      <div class="row justify-center">
        <div class="col-4 text-center">
          <div class="index-info">120</div>
          <div class="text-size-13 text-grey-7">Follow</div>
        </div>
        <div class="col-4 text-center relative-position">
          <common-icon class="line absolute-left" name="line" size="17px"/>
          <div class="index-info">120k</div>
          <div class="text-size-13 text-grey-7">Like</div>
          <common-icon name="line" class="line absolute-right" size="17px"/>
        </div>
        <div class="col-4 text-center">
          <div class="index-info">1.2M</div>
          <div class="text-size-13 text-grey-7">View</div>
        </div>
        <div class="col-9 text-center q-my-md">
          <q-btn 
            label="Follow now" 
            text-color="white" 
            color="red" 
            class="full-width" 
            size="16px" 
            rounded 
            unelevated 
          />
          <div class="q-mt-md q-mb-xs text-uppercase">
            ↗️ Follow me thanks ↖️ 👁👃🏻👁 👅
          </div>
          <div class="content text-size-13">
            Ghi lại những bủi date chúng tôi hồi còn nhiệt huyết🤡iu lâu goá lười thì thôi🥲
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

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="videos" class="q-pa-none">
          <!-- <div class="col-12 row list-item">
            <div v-for="(item, key) in 6" :key="key"  class="col-6 col-sm-4 text-size-13 card">
              <common-card />
            </div>
          </div> -->
          <div class="text-center">
            <img style="width: 150px" src="@/assets/icons/not-found.svg" />
          </div>
        </q-tab-panel>
        <q-tab-panel name="favourite">
          <div class="text-center">
            <img style="width: 150px" src="@/assets/icons/not-found.svg" />
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const tab = ref('videos');
const actions = [
  { name: 'videos', icon: 'video-play' },
  { name: 'favourite',  icon: 'heart-search' },
]
</script>

<style lang="scss" scoped>
.root {
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