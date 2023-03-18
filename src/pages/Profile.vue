<template>
  <div class="root">
    <div class="text-center q-pt-md">
      <p class="text-bold text-size-17">Dieu Linh Tokyo</p>
      <q-avatar size="120px">
        <img src="@/assets/images/avatar.png">
      </q-avatar>
      <p class="text-size-15">@JessicaPMzz</p>
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
      <q-tab-panel name="follow" class="q-pa-none">
        <div class="col-12 row list-item">
          <div v-for="(item, key) in 6" :key="key"  class="col-6 col-sm-4 text-size-13 card">
            <common-card disableClickName/>
          </div>
        </div>
      </q-tab-panel>
      <q-tab-panel name="orther" class="q-pa-none">
        <div class="col-12 text-center">
          <common-icon name="not-found" size="150px" />
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

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