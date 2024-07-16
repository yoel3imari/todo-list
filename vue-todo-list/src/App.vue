<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import { onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue/dist/iconify.js'

// check auth
const store = useAuthStore()
const fetching = ref(true)
const router = useRouter()

onMounted(async () => {
  fetching.value = true
  await store.verify_token()
  if (store.isAuth) {
    router.push({ name: 'dashboard-overview' })
  } else {
    router.push({ name: 'login' })
  }
  fetching.value = false
})
</script>

<template>
  <template v-if="fetching">
    <div class="h-full w-full flex items-center justify-center">
      <div class="text-sky-500 text-2xl">
        <Icon icon="eos-icons:loading" />
      </div>
    </div>
  </template>
  <template v-else>
    <RouterView></RouterView>
  </template>
</template>

<style scoped></style>
