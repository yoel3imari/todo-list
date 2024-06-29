<template>
  <li
    class="px-4 py-2 rounded-md mb-2 flex cursor-pointer hover:bg-zinc-400/75 transition-all"
    :class="isActive ? 'bg-zinc-400/75' : 'border-zinc-500/75'"
    @click="store.selectNote($props.note)"
  >
    <div class="flex-1">
      <h3>{{ $props.note.title }}</h3>
      <p class="text-amber-300 text-sm">
        {{ new Date($props.note.lastEditedTime).toLocaleTimeString() }}
      </p>
    </div>
  </li>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { NoteInfo } from "../shared/models";
import { useNoteStore } from "../store/noteStore";
const props = defineProps<{
  note: NoteInfo;
}>();

const store = useNoteStore();
const isActive = computed(() => store.selectedNote === props.note);

</script>

<style lang="scss"></style>
