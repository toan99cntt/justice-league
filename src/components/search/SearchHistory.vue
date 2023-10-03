<template>
  <q-list>
    <q-item 
      clickable v-ripple
      class="q-py-none"
      v-for="(item, index) in histories"
      :key="index"
      v-show="checkShowItem(index)"
      @click="fillSearch(item)"
    >
      <q-item-section class="q-pr-none lock">
        <common-icon name="clock" size="16px" />
      </q-item-section>
      <q-item-section>{{ item }}</q-item-section>
      <q-item-section side>
        <common-icon @click.stop="removeResultSearch(index)" name="close" size="10px" />
      </q-item-section>
    </q-item>
  </q-list>
  <div class="show-full text-center" v-show="histories.length >= 5">
    <span class="text-grey-8 " @click="showFull = !showFull">
      {{ `${showFull ? 'Thu gọn' : 'Xem thêm'}` }} <q-icon :name="!showFull ? 'expand_less' : 'expand_more'" size="20px"/>
    </span>
  </div>

  <q-list>
    <q-item 
      clickable v-ripple
    >
      <q-item-section class="icon-star">
        <common-icon name="favorite-chart" size="23px" />
      </q-item-section>
      <q-item-section>Có thể bạn sẽ thích</q-item-section>
    </q-item>
    <q-item 
      clickable v-ripple
      v-for="(item, index) in suggests"
      :key="index"
    >
      <q-item-section class="icon-star">
        <common-icon name="star" size="10px" :colorCode="getIconSuggest(index)"/>
      </q-item-section>
      <q-item-section>{{ item }}</q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emits = defineEmits(['search'])
const showFull = ref(false);
const histories = ref([
  'Đồ hàn',
  'Nhảy Hot Trend',
  'Nướng Nhật bản',
  'Nướng Nhật bản 1',
  'Nướng Nhật bản 2',
  'Nướng Nhật bản 3',
])
const SHOW_LIMIT = 3;

const suggests = ref([
  'Web Designer',
  'Dog Trainer',
  'Marketing Coordinator',
  'Medical Assistant',
  'President of Sales',
  'Nursing Assistant',
  'Marketing Coordinator',
  'Marketing Coordinator',
  'Web Designer',
  'Marketing Coordinator',
  'Medical Assistant',
  'President of Sales',
  'Nursing Assistant',
])

const getIconSuggest = (index: number)  => {
  switch(index) {
    case 0: return 'red'; 
    case 1: return '#FF9900'; 
    case 2: return '#34C86F'; 
    default: return '#DDDDDD'; 
  }
}

const removeResultSearch = (index: number) => {
  histories.value.splice(index, 1)
}

const fillSearch = (search: string) => {
  emits('search', search)
}

const checkShowItem = (index: number) => {
  const limit = showFull.value ? histories.value.length : SHOW_LIMIT;
  return index <= limit;
}
</script>

<style lang="scss" scoped>
.lock {
  max-width: 15px;
}
.icon-star {
  align-items: flex-end;
  max-width: 25px;
}
</style>
