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
    <ul class="m-0 flex-1 h-full overflow-auto bg-gray-50 flex flex-col gap-1 px-2 py-2 border-r">
      <li
        v-for="(v, i) in 5"
        :key="i"
        class="hover:bg-sky-100 hover:text-sky-500 translate-all rounded-lg"
      >
        <Link
          :to="{ name: 'dashboard-overview' }"
          class="py-4 px-2 w-full h-full flex gap-4 items-center"
          :class="layoutStore.dashboardSidebarVisible ? 'justify-start' : 'justify-center'"
        >
          <Icon icon="simple-icons:circle" class="text-3xl text-sky-500" />
          <span v-if="layoutStore.dashboardSidebarVisible" class="transition-all"
            >Link {{ v }}</span
          >
        </Link>
      </li>
    </ul>
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

const layoutStore = useLayoutStore()
</script>

<style lang="scss"></style>
