<template>
  <q-layout view="lHh Lpr lFf">
    <main-header />

    <q-page-container >
      <q-page class="main-content" :class="{ 'bg-login': isLayoutLogin }">
        <q-page>
          <router-view />
        </q-page>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import MainHeader from "@/layouts/MainHeader.vue";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();

const isLayoutLogin = computed(() => route.name === 'login' || route.name === 'register');
</script>

<style lang="scss" scoped>
.main-content {
  background-color: #f8f9fd;
}
.bg-login {
  background-image: url('@/assets/images/bg.png');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  .q-page {
    background: rgba(17, 17, 17, 0.5);
    backdrop-filter: blur(7.5px);
  }
}
</style>
