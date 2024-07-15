<template>
  <div @click="$props.onClick" :class="`bg-${$props.colorClass}-200 hover:bg-${$props.colorClass}-500 flex items-center justify-center`">
    <span class="">
      <v-icon :name="$props.icon" :class="`text-${$props.colorClass}-500`" scale="1.5" />
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  colorClass: string
  icon: string
  onClick: () => void
}>()
</script>

<style lang="scss"></style>
