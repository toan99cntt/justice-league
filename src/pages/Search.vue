<template>
  <div class="root">
    <div class="q-pa-sm">
      <q-input dense rounded outlined v-model="text" class="input-search" @focus="showHistory = true">
        <template v-slot:before>
          <div class="q-px-sm q-pb-sm">
            <common-icon 
              name="arrow-left" 
              size="20px" 
              @click="showHistory ? showHistory = false : $router.go(-1)"
            />
          </div>
        </template>

        <template v-slot:prepend>
          <div class="q-pb-sm">
            <common-icon 
              name="search" 
              size="16px"
            />
          </div>
        </template>

        <template v-slot:append>
          <div class="q-pb-sm">
            <common-icon 
              v-if="text !== ''" 
              name="close-bold" 
              @click="text = ''" 
              size="15px"
            />
          </div>
        </template>

        <template v-slot:after>
          <div v-if="!showHistory" class="q-px-sm q-pb-xs">
            <common-icon 
              name="search-red" 
              size="20px"
            />
          </div>
          <span v-else class="text-red text-size-15">Tìm kiếm</span>
        </template>
      </q-input>
    </div>

    <div class="filter q-px-sm q-pb-xs text-size-13">
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

    <div class="col-12 row list-item">
      <div v-for="(item, key) in 6" :key="key"  class="col-6 col-sm-4 text-size-13 card">
        <common-card/>
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
            Dieu Linh Tokyo 
          </div>
          <div class="col-3 text-grey-6 text-right">
            2.3k <common-icon name="heart-red" size="14px" class="q-pb-xs"/>
          </div>
        </div>
      </div>
    </div>
  
    <div v-show="showHistory" class="search-history">
      <search-history />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SearchHistory from "@/components/home/SearchHistory.vue";

const tab = ref('follow');
const text = ref('follow');
const showHistory = ref(false)
const actions = [
  { name: 'follow', label: 'Follow', icon: 'magic-bold' },
  { name: 'liked', label: 'Liked', icon: 'heart-gray' },
  { name: 'saved', label: 'Saved', icon: 'save-gray' },
  { name: 'block', label: 'Hide/Block', icon: 'block-gray' },
]
</script>

<style lang="scss" scoped>
.root {
  padding-bottom: 100px;
  padding-top: 5px;
  .search-history {
    position: absolute;
    top: 60px;
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

</style>

<style lang="scss">
.input-search {
  .q-field__control {
    background: #EEEEEE;
    height: 37px !important
  }
  .q-field__control:before{
    border: none !important;

  }
}
</style>