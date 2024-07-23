<template>
  <ul class="m-0 flex-1 h-full overflow-auto flex flex-col gap-1 px-2 py-2">
    <li
      v-for="(elm, i) in sidebarList"
      :key="i"
      class="hover:bg-sky-100 hover:text-sky-500 cursor-pointer rounded-lg"
      :class="`${route.name === elm.link ? 'bg-sky-100 text-sky-500':'text-gray-500' }`"
    >
      <RouterLink
        :to="{ name: elm.link }"
        class="px-4 py-3 w-full h-full flex gap-4 items-center"
        :class="`${layoutStore.dashboardSidebarVisible ? 'justify-start' : 'justify-center'}`"
      >
        <Icon :icon="elm.icon" class="text-xl" />
        <span v-if="layoutStore.dashboardSidebarVisible" class="text-lg">{{ elm.label }}</span>
      </RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useLayoutStore } from '@/stores/layoutStore'
import { sidebarList } from '@/utils/AppLists';
import { Icon } from '@iconify/vue/dist/iconify.js'
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute()
const layoutStore = useLayoutStore()
</script>

<style lang="scss"></style>
