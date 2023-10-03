<template>
  <q-avatar
    :size="size"
    class="overlapping avatar"
    :color="!image ? color : ''"
    :text-color="textColor"
  >
    <img v-if="image" :src="image" style="object-fit: cover;">
    <div v-else-if="!image && name">{{ name.charAt(0).toUpperCase() }}</div>
  </q-avatar>
</template>

<script setup lang="ts">
defineProps( {
  image: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: '20px'
  },
  textColor: {
    type: String,
    default: 'white'
  },
  color: {
    type: String,
    default: 'primary'
  }
})
</script>

<style lang="scss">
.avatar {
  .q-avatar__content {
    border: 1.5px solid white;
  }
}
</style>
