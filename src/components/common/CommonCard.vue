<template> 
  <div @click="$router.push({ name: 'home' })">
    <q-card flat class="my-card relative-position" >
      <q-img class="border" src="src/assets/images/bg.png">
      </q-img>
      <div class="absolute-bottom text-white text-size-13 q-pa-sm">
        12-06-2022
      </div>
    </q-card>
    <div>#Capcut #bongda #hocduong.. </div>
    <div>Amet minim mollit non deser... </div>
    <div class="row">
      <div class="col-9">
        <q-avatar
          size="20px"
          class="overlapping q-mr-sm"
        >
          <img :src="`https://cdn.quasar.dev/img/avatar1.jpg`">
        </q-avatar>
        <span @click.stop="!disableClickName ? $router.push({ name: 'userDetail' }): ''"> Dieu Linh Tokyo</span>
      </div>
      <div class="col-3 text-grey-6 text-right">
        2.3k <common-icon name="heart-red" size="14px" class="q-pb-xs"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  disableClickName: {
    type: Boolean,
    default: false
  }
})

</script>

<style lang="scss" scoped>
.border {
  border-radius: 7px !important;
}
</style>