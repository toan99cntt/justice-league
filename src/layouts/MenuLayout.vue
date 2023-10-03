<template>
  <router-view />
  <div id="task-bar" class="footer full-width">
    <q-tabs
      v-model="tab"
      dense
      no-caps
      align="justify"
      class="text-white full-width tab bg-black"
      :breakpoint="0"
      indicator-color="transparent"
    >
      <q-tab 
        v-for="(item, key) in menus" 
        :key="key" :name="item.name"

        @click="$router.push({ name: item.routeName })"
      > 
        <common-icon :name="item.icon" size="22px" color="white"/>
        <div style="font-size: 11px;" class="text-white">{{item.label}}</div>
      </q-tab>  
    </q-tabs>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const tab = ref('home')

const menus = computed(() => {
  const iconHome = route.name === 'home' ? 'home' : 'home-outline'
  return [
    { label: 'Homepage', name: 'home', icon: iconHome, routeName: 'home' },
    { label: 'Explore', name: 'explore', icon: 'radar', routeName: 'explore' },
    { label: 'Follow', name: 'follow', icon: 'magic-star', routeName: 'follow' },
    { label: 'Profile', name: 'profile', icon: 'profile', routeName: 'profile' },
  ]
})

watch(() => route.name, (val) => {
  tab.value = route.name as string
})

onMounted(() => [
  tab.value = route.name as string
])
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0; 
}
.tab {
  height: 56px;
}
</style>