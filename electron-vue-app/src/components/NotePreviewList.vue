<template>
  <ul class="border-t pt-2 h-[100vh-32px] overflow-auto">
    <NotePreview v-for="note in store.allNotes" :note="note" />
  </ul>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useNoteStore } from '../store/noteStore';
import NotePreview from './NotePreview.vue';
 
const store = useNoteStore()

onMounted(() => {
  store.selectNote(store.allNotes[0])
})
</script>

<style lang="scss"></style>
