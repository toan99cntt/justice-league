<template>
  <!-- <span class="icon" :style="{width: size, color}" :class="extraClass"> -->
    <span :class="`${extraClass} text-${color}`" class="icon justify-center" :style="{width: size, color: `${colorCode} !important`}" v-html="icon"></span>
  <!-- </span> -->
</template>

<script setup lang="ts">
import themeIcons from '@/helpers/icons';
import { computed, ref, watch } from 'vue';

const props = defineProps( {
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: 'fit-content'
  },
  color: {
    type: String,
    default: 'white'
  },
  colorCode: {
    type: String,
    default: ''
  },
  class: {
    type: String,
    default: ''
  },
  title: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false
  },
})

const icon = computed(() => themeIcons[props.name])
const extraClass = ref(props.class);
</script>

<style>
.icon   {
  display: flex;
}
.display-inline {
  display: inline;
}
</style>
