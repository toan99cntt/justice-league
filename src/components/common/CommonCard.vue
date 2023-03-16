<template> 
  <q-card flat class="my-card relative-position" >
    <q-img class="border" src="src/assets/images/bg.png">
    </q-img>
    <div class="absolute-bottom text-white text-size-13 q-pa-sm">
      {{ date }}
    </div>
  </q-card>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  date: {
    type: String,
    default: '12-06-2022'
  }
})

</script>

<style lang="scss" scoped>
.border {
  border-radius: 7px !important;
}
</style>