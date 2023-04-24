<template> 
  <div class="my-card" @click="$router.push({ name: 'home' })">
    <q-card flat class="relative-position card" >
      <img class="image" :src="data.image"/>
      <div class="absolute-bottom text-white text-size-13 q-pa-sm date">
        {{ formatDate(data.published_date) }}
      </div>
    </q-card>
    <div class="content">
      <div class="ellipsis">#{{ data.hashtag }}</div>
      <div class="ellipsis">{{ data.description }}</div>
      <div class="row">
        <div class="col-8 ellipsis">
          <q-avatar
            size="20px"
            class="overlapping"
          >
            <img :src="data.image">
          </q-avatar>
          <span 
            @click.stop="!disableClickName ? $router.push({ name: 'userDetail' }): ''"
          >{{ data.user_name }}</span>
        </div>
        <div class="col-4 text-grey-6 text-right row justify-end">
          {{ minifyNumber(data.views) }} 
          <common-icon name="heart" color="red" size="10px" class="q-pb-xs icon-heart q-ml-xs"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Video } from "@/models/video";
import { formatDate } from "@/services/utils/date";
import { minifyNumber } from "@/services/utils/common";
import { defineProps, type PropType } from "vue";

defineProps({
  disableClickName: {
    type: Boolean,
    default: false
  },
  data: {
    type: Object as PropType<Video>,
    default: () => {}
  }
})

</script>

<style lang="scss" scoped>
.my-card {
    height: 100%;
  .card {
    max-height: calc(100% - 65px);
    height: 100%;
    .image {
      height: 100%;
      border-radius: 7px !important;
      object-fit: cover;
    }
  }
  .content {
    height: 84.5px;
  }
}
@media only screen and (max-width: 495px) {
  .my-card {
    font-size: 11px;
    .date {
      font-size: 11px;
    }
  }
}
</style>

<style lang="scss">
.icon-heart {
  svg {
    padding-bottom: 5px;
  }
}
</style>