<template>
  <aside class="w-[250px] h-[100vh] overflow-hidden bg-zinc-500">
    <ControlPanel />
    <NotePreviewList />
  </aside>
</template>

<script setup lang="ts">
import ControlPanel from "./ControlPanel.vue";
import NotePreviewList from "./NotePreviewList.vue";
</script>

<style lang="scss"></style>
