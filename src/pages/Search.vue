<template>
  <div class="root row justify-center q-pa-sm q-mt-sm">
    <div class="col-12 col-sm-9 col-md-6 col-xl-6">
      <input-search 
        v-model="search"
        :showHistory="showHistory"
        :loading="loading"
        @focus-input="showHistory = true"
        @on-back="showHistory ? showHistory = false : $router.go(-1)"
        @on-search="searchData"
      />

      <div class="filter q-py-xs q-pb-xs text-size-13">
        <q-chip clickable color="red" text-color="white" size="13px">
          Mới nhất
        </q-chip>
        <q-chip clickable  text-color="grey-7" size="13px">
          Cũ Nhất
        </q-chip>
        <q-chip clickable  text-color="grey-7" size="13px">
          Nhiều lượt xem
        </q-chip>
      </div>

      <div class="row">
        <div v-for="item in videos" :key="item.id"  class="col-6 col-sm-4 col-md-3 text-size-13 card">
          <common-card
            :data="item"
          />
        </div>
      </div>
    
    </div>
    <div v-show="showHistory" class="search-history row justify-center">
      <div class="col-12 col-sm-9 col-md-6 col-xl-6">
        <search-history 
          @search="val => fillDataSearch(val)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SearchHistory from "@/components/search/SearchHistory.vue";
import InputSearch from "@/components/search/InputSearch.vue";
import { searchService } from "@/services/domains/search/request";
import { getCursorKey } from "@/services/utils/common";
import type { Video } from "@/models/video";

const search = ref('follow');
const loading = ref(false);
const showHistory = ref(true);
const cursor = ref('')
const videos = ref<Video[]>([])
const actions = [
  { name: 'follow', label: 'Follow', icon: 'magic-bold' },
  { name: 'liked', label: 'Liked', icon: 'heart-gray' },
  { name: 'saved', label: 'Saved', icon: 'save-gray' },
  { name: 'block', label: 'Hide/Block', icon: 'block-gray' },
]

const fillDataSearch = async(data: string) => {
  search.value = data
  await searchData();
}
const searchData = async() => {
  try {
    loading.value = true;
    const res = await searchService.getResultSearch({
      search: search.value,
      cursor: cursor.value
    })
    videos.value = [...videos.value, ...res.items]
    cursor.value = getCursorKey(res.next_page_url)
    showHistory.value = false;
  } catch(err) {
    //
  } finally {
    loading.value = false;
  }
}
</script>

<style lang="scss" scoped>
.root {
  padding-bottom: 100px;
  padding-top: 5px;
  margin-top: 74px;
  .search-history {
    position: absolute;
    top: 50px;
    background: #ffff;
    width: 100%;
  }
}
.list-item {
  padding: 0px 5px
}
.card {
  padding: 5px
}
@media only screen and (max-width: 495px) {
  .card {
    padding: 2px;
  }
}
</style>
