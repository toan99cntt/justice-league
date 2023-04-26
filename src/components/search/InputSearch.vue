<template>
  <div>
    <q-input 
      dense outlined  rounded
      color="grey-5"
      v-model="search"
      @focus="$emit('focusInput')"
      @keyup.enter="$emit('onSearch')"
    >
      <template v-slot:before>
        <q-btn round flat no-caps>
          <common-icon 
            name="arrow-left" 
            size="20px" 
            @click="$emit('onBack')"
          />
        </q-btn>
      </template>

      <template v-slot:prepend>
          <common-icon 
            name="search" 
            size="16px"
          />
      </template>

      <template v-slot:append>
          <common-icon 
            v-if="search !== '' && !loading" 
            name="close" 
            @click="search = ''" 
            size="15px"
          />
          <q-circular-progress
            v-show="loading"
            indeterminate
            rounded
            size="15px"
            color="grey"
          />
      </template>

      <template v-slot:after>
        <q-btn 
          round 
          flat 
          no-caps 
          :disable="!search"
          @click="$emit('onSearch')"
        >
          <common-icon 
            v-if="!showHistory"
            name="search" 
            size="20px"
          />
          <span v-else class="text-red text-size-15">Tìm kiếm</span>
        </q-btn>
        <div >
        </div>
      </template>
    </q-input>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"

const emits = defineEmits(['update:modelValue', 'focusInput', 'onBack', 'onSearch'])
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  showHistory: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const search = computed({
  get: () => props.modelValue,
  set: (val) => emits('update:modelValue', val)
})
</script>

<style>
.input-search .q-field__control:hover:before {
  border-color: #ddd !important;
}
</style>
