<template>
  <AuthLayout>
    <div class="bg-white rounded-2xl py-6 px-12 w-96">
      <div class="flex flex-col items-center justify-center">
        <!-- <img src="/images/hero-1.png" width="130" /> -->
        <h1 class="text-2xl font-bold">Welcome to <span class="bg-sky-500 p-[1px] text-white">Todo</span></h1>
      </div>
      <a-form
        :model="formState"
        name="basic"
        layout="vertical"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="Email"
          name="email"
          :rules="[{ required: true, type: 'email', message: 'Please input your email!' }]"
        >
          <a-input v-model:value="formState.email" />
        </a-form-item>

        <a-form-item
          label="Password"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit">Enter</a-button>
        </a-form-item>
      </a-form>
      <div>
        <p>You don't have an account ? <Link to="/auth/sign-up" class="text-sky-500">Sing Up</Link></p>
      </div>
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import { RouterLink as Link} from 'vue-router';
import AuthLayout from '../layouts/AuthLayout.vue'
import { reactive } from 'vue'
import { useAuthStore } from '@/stores/authStore';
import { useMutation } from '@tanstack/vue-query';

interface FormState {
  email: string
  password: string
}

const formState = reactive<FormState>({
  email: '',
  password: ''
})

const store = useAuthStore()
const { isPending, isError, error, mutate } = useMutation({
  mutationFn: store.register
})

const onFinish = (values: any) => {
  mutate({
    name: values.name,
    email: values.email,
    password: values.password
  })

  if( store.error ) {
    
  }
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
</script>

<style lang="scss"></style>
