import { defineStore } from "pinia";
import { ref } from "vue";

export const useLayoutStore = defineStore('layout', () => {

  const dashboardSidebarVisible = ref<boolean>(true);
  const toggleDashboardSidebarVisible = () => {
    dashboardSidebarVisible.value = !dashboardSidebarVisible.value
  }

  return {
    dashboardSidebarVisible,
    toggleDashboardSidebarVisible
  }
})