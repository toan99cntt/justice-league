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
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel 
          v-for="action in actions"
          :key="action.name"
          :name="action.name" 
          class="q-pa-none"
        >
          <div class="text-center">
            <img style="width: 150px" src="@/assets/icons/not-found.svg" />
          </div>
          <!-- <div class="col-12 row list-item">
            <div v-for="(item, key) in 6" :key="key"  class="col-6 col-sm-4 text-size-13 card">
              <common-card disableClickName/>
            </div>
          </div> -->
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/useAuthStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const authStore = useAuthStore();
const {userProfile} = storeToRefs(authStore);

const tab = ref('follow');
const actions = [
  { name: 'follow', label: 'Follow', icon: 'magic-bold' },
  { name: 'orther', label: 'Liked', icon: 'heart-gray' },
  { name: 'saved', label: 'Saved', icon: 'save-gray' },
  { name: 'block', label: 'Hide/Block', icon: 'block-gray' },
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
</style>