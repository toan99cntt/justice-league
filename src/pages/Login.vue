<template>
  <q-dialog seamless full-width v-model="show" class="login-dialog" >
    <q-card class="q-px-sm" style="max-width: 500px !important;">
      <q-card-section class="text-right q-py-sm q-pr-xs">
        <q-btn
          icon="close"
          flat
          round
          size="12px"
          @click="hideDialog"
        />
      </q-card-section>
      <q-card-section class="q-mb-sm q-pt-none">
        <div class="login">Login</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="q-mb-lg">
          <div  class="text-center text-red">{{ errorMsg }}</div>
          <common-input
            v-model="account.email" 
            :errors="errors.email"
            placeholder="Email" 
            class="q-mb-lg"
           />
          <common-input 
            v-model="account.password" 
            :errors="errors.password"
            placeholder="Password" 
            type="password"
          />
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
          :loading="loading"
          unelevated 
          @click="login"
        />
        <p class="q-my-lg text-size-15">Don’t have an account? 
          <router-link :to="{ name: 'register' }" class="text-red sign-up">Sign up for free</router-link>
        </p>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import type { Login, LoginError } from '@/models/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { authService } from '@/services/domains/auth/request';
import {useAuthStore} from '@/stores/useAuthStore';

const router = useRouter()
const authStore = useAuthStore()

const show = ref(true);
const loading = ref(false);
const errors = ref({} as LoginError)
const errorMsg = ref('')
const account = ref<Login>({
  email: '',
  password: ''
})

const login = async() =>{
  errors.value = {} as  LoginError;
  errorMsg.value = '';
  try {
    loading.value = true;
    const res = await authService.login(account.value);
    localStorage.setItem('token_data', res.token);
    authStore.setIsAuthenticated();
    authStore.setUserProfile(res.user);
    router.push({ name: 'home' })
  } catch (error: any) {
    if(error.status === 422){
      errors.value = { ...error.data.errors}
    } else if(error.status === 401) {
      errorMsg.value = error.data.msg
    }
  } finally {
    loading.value = false;
  }
}

const hideDialog = () => {
  show.value = false;
  setTimeout(() => {
    router.push({ name: 'home' })
  }, 100)
}
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
