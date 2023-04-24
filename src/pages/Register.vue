<template>
  <q-dialog seamless full-width v-model="show" class="register-dialog" >
    <q-card class="q-px-sm" style="max-width: 500px !important;">
      <q-card-section class="q-my-sm">
        <div class="title">Sign up</div>
      </q-card-section>

      <q-card-section class="q-pt-none q-mb-md">
        <common-input 
          v-model="account.name"
          :errors="errors.name" 
          placeholder="Name" 
          class="q-mb-lg"
        />
        <common-input 
          v-model="account.email" 
          :errors="errors.email" 
          placeholder="Email" 
          class="q-mb-lg"/>
        <common-input
          v-model="account.password" 
          :errors="errors.password" 
          placeholder="Password" 
          type="password" 
          class="q-mb-lg"
         />
        <common-input 
          v-model="account.password_confirmation" 
          placeholder="Re-pass:" 
          type="password"
        />
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
          @click="register"
        />
        <div class="forgot-pwd q-my-lg text-size-15">Or Forgot password</div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import type { RegisterError, Register } from '@/models/auth';
import { authService } from '@/services/domains/auth/request';
import { useAuth } from '@/services/domains/auth/useAuth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { trimObject } from '@/services/utils/common';

const router = useRouter()

const show = ref(true);
const loading = ref(true);
const errorMsg = ref('');
const errors = ref({} as RegisterError);
const account = ref<Register>({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
})

const register = async() =>{
  errors.value = {} as  RegisterError;
  errorMsg.value = '';
  try {
    loading.value = true;
    const res = await authService.signup(trimObject(account.value));
    useAuth().setAuthInfo(res.token, res.user)

    await router.push({ name: 'home' })
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
