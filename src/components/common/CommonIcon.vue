<template>
  <q-icon :size="size">
    <img :src="src" alt="" />
  </q-icon>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
})

const src = computed(() => new URL(`/src/assets/icons/${props.name}.svg`, import.meta.url).href)
</script>