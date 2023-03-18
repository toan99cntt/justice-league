<template>
  <router-view />
  <div class="footer full-width">
    <q-tabs
      dense
      no-caps
      align="justify"
      class="text-white full-width tab"
      :class="{ 'text-grey-8 bg-white': $route.name !== 'home'}"
      indicator-color="transparent"
      :breakpoint="0"
    >
      <q-tab 
        v-for="(item, key) in menus" 
        :key="key" :name="item.name"
        @click="$router.push({ name: item.routeName })"
      > 
        <common-icon :name="item.icon" size="23px"/>
        <p class="text-size-13">{{item.label}}</p>
      </q-tab>
    </q-tabs>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const menus = computed(() => {
  const isHomePage = route.name === 'home';
  return [
    { label: 'Homepage', name: 'home', icon: isHomePage ? 'home-white' : 'home-gray', routeName: 'home' },
    { label: 'Explore', name: 'explore', icon: isHomePage ? 'radar-white' : 'radar-gray', routeName: '' },
    { label: 'Follow', name: 'pollow', icon: isHomePage ? 'magic-star-white' : 'magic-gray', routeName: '' },
    { label: 'Profile', name: 'profile', icon: isHomePage ? 'profile-white' : 'profile-gray', routeName: 'profile' },
  ]
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