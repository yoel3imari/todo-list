<template>
  <div class="h-8 flex items-center mb-[2px]">
    <div class="flex-1">
      <h1 class="font-semibold">Lists</h1>
    </div>
    <div class="">
      <Popper :hover="true">
        <template #content>
          <span class="p-2 bg-zinc-900/75 rounded-md">New File</span>
        </template>
        <button
          @click="store.newNote()"
          class="h-6 px-4 flex items-center justify-center outline-none focus:outline-none"
        >
          <span class="m-0 p-0">
            <FileIcon />
          </span>
        </button>
      </Popper>
    </div>
  </div>
</template>

<script setup lang="ts">
import Popper from "vue3-popper";
import FileIcon from "./icons/FileIcon.vue";
import { useNoteStore } from "../store/noteStore";
const store = useNoteStore()
</script>

<style lang="scss"></style>
