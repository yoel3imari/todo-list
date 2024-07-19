<template>
  <nav :class="layoutStore.dashboardSidebarVisible ? 'flex fixed md:relative top-0 left-[-310px]':''" class="flex-col h-screen max-w-[300px] overflow-auto bg-white col-span-1">
    <div id="logo" class="h-16 border-b flex items-center justify-center">
      <Link to="/dashboard/overview">
        <span class="text-3xl font-bold text-sky-500 m-0 text-center">Todo</span>
        <span class="text-sm">v1</span>
      </Link>
    </div>
    <ul class="m-0 flex-1 h-full overflow-auto flex flex-col gap-1 ps-2">
      <li
        v-for="(v, i) in 15"
        :key="i"
        class="hover:bg-sky-100 hover:text-sky-500 translate-all rounded-lg"
      >
        <Link :to="{ name: 'dashboard-overview' }" class="py-4 px-2 block w-full h-full"
          >Link {{ v }}</Link
        >
      </li>
    </ul>
    <div>
      <Link to="/dashboard/overview">
        <h1 class="text-xl py-4 border-t mt-2 font-bold text-sky-500 m-0 text-center">Sign Out</h1>
      </Link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useLayoutStore } from '@/stores/layoutStore';
import { RouterLink as Link } from 'vue-router'
const layoutStore = useLayoutStore();
</script>

<style lang="scss"></style>
