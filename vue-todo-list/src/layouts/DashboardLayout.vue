<template>
  <div class="bg-gray-50 h-full min-h-full w-full">
    <div
      class="h-full grid grid-cols-2 transition-all"
      :class="
        layoutStore.dashboardSidebarVisible
          ? 'md:grid-cols-[250px_repeat(1,_1fr)]'
          : 'md:grid-cols-[80px_repeat(1,_1fr)]'
      "
    >
      <nav class="h-screen hidden md:block">
        <DashboardSidebar />
      </nav>

      <div class="">
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
import DashboardSidebar from '@/components/DashboardSidebar.vue'
import DashboardHeader from '@/components/DashboardHeader.vue'
import DashboardFooter from '@/components/DashboardFooter.vue'
import { useLayoutStore } from '@/stores/layoutStore'

const layoutStore = useLayoutStore()
</script>

<style lang="scss"></style>
