import { defineStore } from "pinia";
import { ref } from "vue";

export const useLayoutStore = defineStore('layout', () => {

  const dashboardSidebarVisible = ref<boolean>(true);
  const isDrawerOpen = ref(false);


  const toggleDashboardSidebarVisible = () => {
    dashboardSidebarVisible.value = !dashboardSidebarVisible.value
  }

  const toggleDrawer = () => isDrawerOpen.value = !isDrawerOpen.value

  return {
    dashboardSidebarVisible,
    toggleDashboardSidebarVisible,
    isDrawerOpen,
    toggleDrawer
  }
})