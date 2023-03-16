<template>
  <q-layout view="lHh Lpr lFf">
    <main-header />

    <q-page-container >
      <q-page class="main-content" :class="{ 'bg-login': isLayoutLogin }">
        <div class="container">
          <router-view />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import MainHeader from "@/layouts/MainHeader.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const isLayoutLogin = computed(() => route.name === 'login' || route.name === 'register');
</script>

<style lang="scss" scoped>
.main-content {
  background-color: #f8f9fd;
  .container {
    height: calc(100vh - 65px);
    width: 100%;
    background: #fff;
  }
}
.bg-login {
  background-image: url('@/assets/images/bg.png');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  .container {
    background: rgba(17, 17, 17, 0.5);
    backdrop-filter: blur(7.5px);
  }
}
</style>
