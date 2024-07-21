<template>
  <a-drawer
    title=""
    placement="left"
    :closable="true"
    :open="layoutStore.isDrawerOpen"
    @close="layoutStore.toggleDrawer"
    width="280"
  >
    <SidebarList />
  </a-drawer>
</template>

<script setup lang="ts">
import { useLayoutStore } from '@/stores/layoutStore';
import SidebarList from './SidebarList.vue'
const layoutStore = useLayoutStore()
</script>

<style lang="scss"></style>
