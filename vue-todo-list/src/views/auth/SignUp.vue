<template>
  <div class="bg-white rounded-2xl py-6 px-12 w-96">
    <div class="flex flex-col items-center justify-center">
      <!-- <img src="/images/hero-1.png" width="130" /> -->
      <h1 class="text-2xl font-bold">
        Welcome to <span class="bg-sky-500 p-[1px] text-white">Todo</span>
      </h1>
    </div>
    <a-form
      ref="formRef"
      :rules="rules"
      :model="formState"
      name="basic"
      layout="vertical"
      @finish="handleFinish"
      @finishFailed="handleFinishFailed"
    >
      <a-form-item label="Name" name="name">
        <a-input v-model:value="formState.name" />
      </a-form-item>
      <a-form-item label="Email" name="email">
        <a-input v-model:value="formState.email" />
      </a-form-item>

      <a-form-item has-feedback label="Password" name="password">
        <a-input v-model:value="formState.password" type="password" autocomplete="off" />
      </a-form-item>

      <a-form-item has-feedback label="Confirm" name="checkPass">
        <a-input v-model:value="formState.checkPass" type="password" autocomplete="off" />
      </a-form-item>

      <a-form-item>
        <a-button type="primary" html-type="submit">
          <span v-if="isPending">....</span>
          <span v-else>Sign Up</span>
        </a-button>
      </a-form-item>
    </a-form>
    <div>
      <p>
        You already have an account ?
        <Link :to="{ name: 'login' }" class="text-sky-500">Log In</Link>
      </p>
    </div>
  </div>
  <contextHolder />
</template>

<script setup lang="ts">
import { RouterLink as Link, useRouter } from 'vue-router'
import { reactive, ref } from 'vue'
import type { Rule } from 'ant-design-vue/es/form'
import { notification, type FormInstance } from 'ant-design-vue'
import { useAuthStore } from '@/stores/authStore'
import { useMutation } from '@tanstack/vue-query'
import {api, contextHolder} from '@/utils/NotifService'

interface FormState {
  name: string
  email: string
  password: string
  checkPass: string
}

const formRef = ref<FormInstance>()
const formState = reactive<FormState>({
  name: '',
  email: '',
  password: '',
  checkPass: ''
})

const validatePass = async (_rule: Rule, value: string) => {
  if (value === '') {
    return Promise.reject('Please input the password')
  } else {
    if (formState.checkPass !== '') {
      formRef.value?.validateFields('checkPass')
    }
    return Promise.resolve()
  }
}

const validatePass2 = async (_rule: Rule, value: string) => {
  if (value === '') {
    return Promise.reject('Please input the password again')
  } else if (value !== formState.password) {
    return Promise.reject("Two inputs don't match!")
  } else {
    return Promise.resolve()
  }
}

const rules: Record<string, Rule[]> = {
  name: [
    { required: true, type: 'string', message: 'Please input your full name!', trigger: 'blur' }
  ],
  email: [{ required: true, type: 'email', message: 'Please input your email!', trigger: 'blur' }],
  password: [{ required: true, validator: validatePass, trigger: 'change' }],
  checkPass: [{ validator: validatePass2, trigger: 'change' }]
}

const [api, contextHolder] = notification.useNotification()
const store = useAuthStore()
const router = useRouter()
const { isPending, isError, error, mutate } = useMutation({
  mutationFn: store.register
})

const handleFinish = async (values: FormState) => {
  mutate({
    name: values.name,
    email: values.email,
    password: values.password
  })

  if (store.error) {
    api.error({
      message: 'Sign up failed!',
      description: store.error.toString(),
      placement: 'bottomRight'
    })
  } else {
    router.push({ name: 'dashboard-overview' })
  }
}
const handleFinishFailed = (errors: Error) => {
  console.log(errors)
}
</script>

<style lang="scss"></style>
