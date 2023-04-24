<template>
  <q-input 
    v-model="model"
    :error="!!errors.length"
    :placeholder="placeholder"
    hide-bottom-space
    :type="isPassword && type === 'password' ? 'text' : type" 
    class="common-input"
  > 
    <template v-slot:append v-if="type === 'password'">
      <common-icon
        :name="!isPassword ? 'eye-slash' : 'eye'"
        class="cursor-pointer"
        @click="isPassword = !isPassword"
      />
    </template>
    <template v-slot:error>
      {{ errors[0] }}
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { PropType } from "vue";

export type TypeInput =
  | "number"
  | "text"
  | "textarea"
  | "time"
  | "password"
  | "email"
  | "search"
  | "tel"
  | "file"
  | "url"
  | "date"
  | undefined;

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String as PropType<TypeInput>,
    default: 'text'
  },
  errors: {
    type: Array as PropType<String[]>,
    default: () => [],
  },
})

const emits = defineEmits(["update:modelValue"])

const isPassword = ref(false);

const model = computed({
  get: () => props.modelValue,
  set: (val: Number | String) => emits("update:modelValue", val)
})

</script>

<style lang="scss">
.common-input {
  input {
    font-size: 17px;
  }
  .q-field__label {
    color: #000 !important;
    font-size: 17px;
    line-height: 20px;
  }
}
</style>