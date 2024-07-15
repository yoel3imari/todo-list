<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from './stores/authStore'
import { onMounted } from 'vue'

// check auth
const store = useAuthStore()

onMounted(async () => {
  await store.verify_token()
  if (store.isAuth) {
    const router = useRouter()
    router.push({ name: 'dashboard-overview' })
  }
})
</script>

<template>
  <RouterView></RouterView>
</template>

<style scoped></style>
