<template>
  <AppLayout>
    <div class="flex items-center justify-center flex-col h-full">
      <div class="text-5xl font-bold text-sky-500">Not Found</div>
      <a-button class="border bg-gray-100 font-bold mt-4 p-0 text-sky-500 border-sky-500"
      size="large"
        >
        <Link to="/" class="w-full h-full block text-center">Home</Link>
        </a-button
      >
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import { RouterLink as Link } from 'vue-router';

</script>

<style lang="scss"></style>
