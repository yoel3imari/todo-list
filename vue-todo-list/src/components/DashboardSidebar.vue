<template>
  <div class="flex flex-col h-full max-w-[300px] overflow-auto bg-white">
    <div id="logo" class="h-16 flex items-center justify-center border-r">
      <Link to="/dashboard/overview">
        <span class="text-3xl m-0 flex items-center justify-center gap-4">
          <Icon icon="mdi:todo-minus" class="text-sky-700 text-4xl" />
          <span v-if="layoutStore.dashboardSidebarVisible" class="transition-all">
            <span class="font-bold text-sky-500">Todo</span
            ><span class="text-sm text-gray-300">v1</span>
          </span>
        </span>
      </Link>
    </div>
    
    <SidebarList />

    <div class="py-4 flex items-center justify-center border-r">
      <Link to="/dashboard/overview" class="flex gap-4 items-center justify-center text-sky-500">
        <Icon icon="lets-icons:sign-out-squre" class="text-4xl" />
        <h1 v-if="layoutStore.dashboardSidebarVisible" class="text-xl mt-2 font-bold m-0">
          <span>Sign Out</span>
        </h1>
      </Link>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useLayoutStore } from '@/stores/layoutStore'
import { Icon } from '@iconify/vue/dist/iconify.js'
import { RouterLink as Link } from 'vue-router'
import SidebarList from './SidebarList.vue';

const layoutStore = useLayoutStore()
</script>

<style lang="scss"></style>
