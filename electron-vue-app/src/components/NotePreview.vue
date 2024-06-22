<template>
  <li
    class="px-4 py-2 border rounded-md mb-2 flex cursor-pointer"
    :class="isActive ? 'border-amber-500' : 'border-white/20'"
    @click="activateNote"
  >
    <div class="flex-1">
      <h3>{{ $props.np.title }}</h3>
      <p class="text-amber-300 text-sm">
        {{ new Date($props.np.lastEditedTime).toLocaleTimeString() }}
      </p>
    </div>
    <button class="font-bold text-rose-400">&Cross;</button>
  </li>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { NoteInfo } from "../shared/models";
const props = defineProps<{
  np: NoteInfo;
}>();

const isActive = ref(false);

const activateNote = () => {
  isActive.value = true;
};
</script>

<style lang="scss"></style>
