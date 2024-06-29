<template>
  <main class="flex flex-row h-screen">
    <!-- <DraggableBar /> -->
    <TheSidebar />
    <TheContent />
  </main>
</template>

<script setup lang="ts">
import DraggableBar from "../components/DraggableBar.vue";
import TheContent from "../components/TheContent.vue";
import TheSidebar from "../components/TheSidebar.vue";
</script>

<style lang="scss"></style>
