<template>
  <q-dialog seamless full-width v-model="show" class="login-dialog" >
    <q-card class="q-px-sm">
      <q-card-section  class="q-my-sm">
        <div class="login">Login</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="q-mb-lg">
          <common-input v-model="account.email" placeholder="Email" class="q-mb-lg"/>
          <common-input v-model="account.password" placeholder="Password" type="password"/>
        </div>
        <div class="forgot-pwd text-size-15">Or Forgot password</div>
      </q-card-section>

      <q-card-actions class="q-px-md">
        <q-btn 
          label="Log in" 
          text-color="white" 
          color="red" 
          class="full-width" 
          size="16px" 
          rounded 
          unelevated 
        />
        <p class="q-my-lg text-size-15">Don’t have an account? 
          <router-link :to="{ name: 'register' }" class="text-red sign-up">Sign up for free</router-link>
        </p>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import type { Login } from '@/models/auth';
import { ref } from 'vue';

const show = ref(true);
const account = ref<Login>({
  email: '',
  password: ''
})
</script>

<style lang="scss" scoped>
.login-dialog {
  .q-card {
    border-radius: 12px;
  }
  .login {
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    font-style: normal;
    font-size: 30px;
    line-height: 33px;
    padding-top: 20px;
  }
  .btn-submit {
    border-radius: 100px;
  }
  .forgot-pwd {
    color: #686868;
  }
  .sign-up {
    text-decoration-line: underline;
    font-weight: 500;
  }
}
</style>
