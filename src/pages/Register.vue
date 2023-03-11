<template>
  <q-dialog seamless full-width v-model="show" class="register-dialog" >
    <q-card class="q-px-sm">
      <q-card-section class="q-my-sm">
        <div class="title">Sign up</div>
      </q-card-section>

      <q-card-section class="q-pt-none q-mb-md">
        <common-input v-model="account.email" placeholder="Email" class="q-mb-lg"/>
        <common-input v-model="account.password" placeholder="Password" type="password" class="q-mb-lg"/>
        <common-input v-model="account.rePassword" placeholder="Re-pass:" type="password"/>
      </q-card-section>

      <q-card-actions class="q-px-md">
        <q-btn 
          label="Sign up" 
          text-color="white" 
          color="red" 
          class="full-width" 
          size="16px" 
          rounded 
          unelevated 
        />
        <div class="forgot-pwd q-my-lg text-size-15">Or Forgot password</div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import type { Register } from '@/models/auth';
import { ref } from 'vue';

const show = true;
const account = ref<Register>({
  email: '',
  password: '',
  rePassword: ''
})
</script>

<style lang="scss" scoped>
.register-dialog {
  .q-card {
    border-radius: 12px;
  }
  .title {
    font-family: 'Manrope', sans-serif;
    font-style: normal;
    font-weight: 800;
    line-height: 33px;
    padding-top: 20px;
    font-size: 30px;
  }
  .btn-submit {
    border-radius: 100px;
  }
  .forgot-pwd {
    color: #686868;
  }
}
</style>
