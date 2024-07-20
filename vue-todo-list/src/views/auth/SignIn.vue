<template>
  <div class="bg-white rounded-2xl py-6 px-12 w-96">
    <div class="flex flex-col items-center justify-center">
      <!-- <img src="/images/hero-1.png" width="130" /> -->
      <h1 class="text-2xl font-bold">
        Welcome to <span class="bg-sky-500 p-[1px] text-white">Todo</span>
      </h1>
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
        <a-button type="primary" html-type="submit">
          <!-- <span v-if="">....</span> -->
          <!-- <span v-else>Enter</span> -->
          <span>Enter</span>
        </a-button>
      </a-form-item>
    </a-form>
    <div>
      <p>
        You don't have an account ?
        <Link :to="{ name: 'signup' }" class="text-sky-500">Sing Up</Link>
      </p>
    </div>
  </div>
  <contextHolder />
</template>

<script setup lang="ts">
import { RouterLink as Link, useRouter } from 'vue-router'
import { reactive } from 'vue'
import { useAuthStore } from '@/stores/authStore'
// import { useMutation } from '@tanstack/vue-query'
import { notif, contextHolder } from '@/utils/NotifService'

interface FormState {
  email: string
  password: string
}

const formState = reactive<FormState>({
  email: '',
  password: ''
})

const router = useRouter()
const store = useAuthStore()

const onFinish = async (values: any) => {
  // await mutate({
  //   email: values.email,
  //   password: values.password
  // })
  await store.login({
    email: values.email,
    password: values.password
  })

  if (store.error !== null) {
    notif.error({
      message: 'Login failed!',
      closeIcon: true,
      duration: 0,
      description: store.error.toString(),
      placement: 'bottomRight'
    })
  } else {
    // console.log("after login, token : " + TokenService.getToken());
    router.push({ name: 'dashboard-overview' })
  }
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
</script>

<style lang="scss"></style>
