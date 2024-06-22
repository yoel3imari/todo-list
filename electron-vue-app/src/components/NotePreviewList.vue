<template>
  <ul class="border-t mt-2 pt-2 h-[100vh-32px] overflow-auto">
    <NotePreview :np="note" />
  </ul>
</template>

<script setup lang="ts">
import { NoteInfo } from '../shared/models';
import NotePreview from './NotePreview.vue';

const note: NoteInfo = {
  title: "hello",
  lastEditedTime: new Date().getTime()
}
</script>

<style lang="scss"></style>
