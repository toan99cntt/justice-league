<template>
  <div class="root">
    <div class="q-pa-sm">
      <q-input dense rounded outlined v-model="search" class="input-search" @focus="showHistory = true">
        <template v-slot:before>
          <q-btn round flat no-caps>
            <common-icon 
              name="arrow-left" 
              size="20px" 
              @click="showHistory ? showHistory = false : $router.go(-1)"
            />
          </q-btn>
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
              v-if="search !== ''" 
              name="close-bold" 
              @click="search = ''" 
              size="15px"
            />
          </div>
        </template>

        <template v-slot:after>
          <q-btn round flat no-caps>
            <common-icon 
              v-if="!showHistory"
              name="search-red" 
              size="20px"
            />
            <span v-else class="text-red text-size-15">Tìm kiếm</span>
          </q-btn>
          <div >
          </div>
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

const search = ref('follow');
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