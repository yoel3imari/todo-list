<template>
  <div class="w-[250px] h-[100vh] overflow-hidden bg-zinc-500 p-[8px]">
    <ControlPanel />
    <NotePreviewList />
  </div>
</template>

<script setup lang="ts">
import ControlPanel from "./ControlPanel.vue";
import NotePreviewList from "./NotePreviewList.vue";
</script>

<style lang="scss"></style>
