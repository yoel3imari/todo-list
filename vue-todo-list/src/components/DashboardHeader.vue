<template>
  <header class="bg-white h-16 py-2 px-4">
    <div class="w-full h-full flex items-center justify-between">
      <div id="left" class="flex gap-4 items-center justify-center h-full">
        <div id="burguer">
          <div
            @click="layoutStore.toggleDashboardSidebarVisible"
            class="w-8 h-8 text-2xl bg-sky-200 text-sky-600 hover:bg-sky-500 hover:text-white cursor-pointer rounded flex items-center justify-center transition-all"
          >
            <span v-if="layoutStore.dashboardSidebarVisible">
              <Icon icon="mdi:hamburger-close" />
            </span>
            <span v-else>
              <Icon icon="mdi:hamburger-open" />
            </span>
          </div>
        </div>
      </div>

      <div id="right" class="flex gap-4 items-center justify-center h-full">
        <div id="new">
          <div
            class="w-8 h-8 text-2xl bg-sky-200 text-sky-600 hover:bg-sky-500 hover:text-white cursor-pointer rounded flex items-center justify-center transition-all"
          >
            <span>
              <Icon icon="ic:baseline-plus" />
            </span>
          </div>
        </div>
        <div id="notif">
          <div
            class="w-8 h-8 text-xl bg-sky-200 text-sky-600 hover:bg-sky-500 hover:text-white cursor-pointer rounded flex items-center justify-center transition-all"
          >
            <span>
              <Icon icon="mingcute:notification-fill" />
            </span>
          </div>
        </div>
        <div id="user">
          <a-avatar
            class="w-9 h-9 text-xl bg-sky-200 text-sky-600 hover:bg-sky-500 hover:text-white cursor-pointer rounded-full flex items-center justify-center transition-all"
          >
            <template #icon>
              <Icon icon="icon-park-solid:avatar" />
            </template>
          </a-avatar>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useLayoutStore } from '@/stores/layoutStore';
import { Icon } from '@iconify/vue'
const layoutStore = useLayoutStore()
</script>

<style lang="scss"></style>
