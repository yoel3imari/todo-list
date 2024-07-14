<template>
  <div class="bg-gray-50 h-full min-h-full w-full">
    <div class="h-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
      <DashboardSidebar />

      <div class="col-span-2 md:col-span-3 lg:col-span-5">
        
        <DashboardHeader />

        <!-- h-[calc(100%-96px)] -->
        <main class="p-3 h-[calc(100%-96px)] bg-gray-50 overflow-auto">
          <router-view />
        </main>
        
        <DashboardFooter />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink as Link } from 'vue-router'
import DashboardSidebar from '@/components/DashboardSidebar.vue'
import DashboardHeader from '@/components/DashboardHeader.vue'
import DashboardFooter from '@/components/DashboardFooter.vue';
</script>

<style lang="scss"></style>
