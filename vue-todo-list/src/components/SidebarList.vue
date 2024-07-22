<template>
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
        <span v-if="layoutStore.dashboardSidebarVisible" class="transition-all">Link {{ v }}</span>
      </Link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useLayoutStore } from '@/stores/layoutStore'
import { Icon } from '@iconify/vue/dist/iconify.js'

const layoutStore = useLayoutStore()
</script>

<style lang="scss"></style>
