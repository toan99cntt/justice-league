<template>
  <router-view />
  <div class="footer full-width">
    <q-tabs
      dense
      no-caps
      align="justify"
      class="text-white full-width tab"
      :class="{ 'text-grey-8 bg-white': !isShowVideo}"
      indicator-color="transparent"
      :breakpoint="0"
    >
      <q-tab 
        v-for="(item, key) in menus" 
        :key="key" :name="item.name"
        @click="$router.push({ name: item.routeName })"
      > 
        <common-icon :name="item.icon" size="23px" :color="getColorAction(item.routeName)"/>
        <p :class="`text-size-13 text-${getColorAction(item.routeName)}`">{{item.label}}</p>
      </q-tab>
    </q-tabs>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const routeAccept = ['home', 'explore']

const menus = computed(() => {
  const iconHome = route.name === 'home' ? 'home' : 'home-outline'
  return [
    { label: 'Homepage', name: 'home', icon: iconHome, routeName: 'home' },
    { label: 'Explore', name: 'explore', icon: 'radar', routeName: 'explore' },
    { label: 'Follow', name: 'follow', icon: 'magic-star', routeName: '' },
    { label: 'Profile', name: 'profile', icon: 'profile', routeName: 'profile' },
  ]
})

const getColorAction = (routeName: string) => {
  if(!isShowVideo.value) return route.name === routeName  ? 'grey-9' : 'grey-7'
  return 'white'
}

const isShowVideo = computed(() => {
  return routeAccept.some((el) => el === route.name)
})

</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0; 
}
.tab {
  height: 83px;
}
</style>