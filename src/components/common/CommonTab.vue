<template>
  <q-tabs
      v-model="tab"
      dense
      no-caps
      align="justify"
      class="text-white full-width tab"
      :breakpoint="0"
    >
      <q-tab name="home"> 
        <common-icon name="home-white" size="23px"/>
        <p class="text-size-13">Homepage</p>
      </q-tab>
      <q-tab name="Explore"> 
        <common-icon name="radar-white" size="23px"/>
        <p class="text-size-13">Explore</p>
      </q-tab>
      <q-tab name="Follow"> 
        <common-icon name="magic-star-white" size="23px"/>
        <p class="text-size-13">Follow</p>
      </q-tab>
      <q-tab name="Profile"> 
        <common-icon name="profile-white" size="23px"/>
        <p class="text-size-13">Profile</p>
      </q-tab>
    </q-tabs>
</template>

<script setup lang="ts">
import { ref } from "vue";

const tab = ref('Explore')

</script>

<style lang="scss" scoped>
.tab {
  height: 83px;
}
</style>