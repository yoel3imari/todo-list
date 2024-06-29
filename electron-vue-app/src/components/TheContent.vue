<template>
  <div class="flex-1 overflow-auto border-l bg-zinc-900">
    <div
      v-if="store.selectedNote === null"
      class="h-full w-full flex items-center justify-center"
    >
      <span class="text-4xl text-gray-300 opacity-50 font-extrabold"
        >Select A Note</span
      >
    </div>
    <div v-else class="h-full">
      <MdEditor
        class="h-full"
        language="en-US"
        theme="dark"
        @onChange="store.onChange"
        style="height: 100%"
        v-model="content"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { MdEditor } from "md-editor-v3";
import { useNoteStore } from "../store/noteStore";
import "md-editor-v3/lib/style.css";
import { computed } from "vue";

const store = useNoteStore();
const content = computed(() => store.selectedNote?.content || "");
</script>

<style lang="scss"></style>
