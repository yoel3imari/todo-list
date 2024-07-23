<template>
  <div
    class="rounded-lg shadow bg-white py-2 px-4 min-w-[280px] w-fit"
    :class="$props.type && `border-s-8 ${
      $props.type === 'success'
      ? 'border-green-500'
      : $props.type === 'error'
      ? 'border-rose-500'
      : $props.type === 'warning'
      ? 'border-amber-500'
      : 'border-sky-500'
    }`"
  >
    <div class="flex w-full justify-between">
      <div class="w-14 h-14 flex justify-center rounded-lg items-center" :class="$props.type && `${
      $props.type === 'success'
      ? 'bg-green-100 text-green-500'
      : $props.type === 'error'
      ? 'bg-rose-100 text-rose-500'
      : $props.type === 'warning'
      ? 'bg-amber-100 text-amber-500'
      : 'bg-sky-100 text-sky-500'
    }`">
        <Icon :icon="$props.icon" class="text-4xl" />
      </div>
      <div class="">
        <h3 class="text-6xl m-0">{{ $props.qnt }}</h3>
      </div>
    </div>
    <div class="flex gap-4 w-full justify-between items-center">
      <div>
        <h2 class="text-xl min-w-20 m-0 text-start text-gray-400">{{ $props.title }}</h2>
      </div>
      <!-- <div class="flex gap-1 text-sm flex-nowrap items-center"> -->
      <div
        v-if="$props.variance"
        class="flex gap-1 text-sm flex-nowrap items-center"
        :class="$props.variance && $props.variance > 0 ? 'text-green-500' : 'text-red-500'"
      >
        <span>
          <span>{{ $props.variance }}</span>
          <span class="text-xs">%</span>
        </span>
        <Icon
          :icon="
            $props.variance && $props.variance > 0
              ? 'streamline:graph-arrow-increase'
              : 'streamline:graph-arrow-decrease'
          "
        />
      </div>
      <!-- <span>since last month</span> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
import { computed } from 'vue';

const props = defineProps<{
  type?: 'info' | 'error' | 'warning' | 'success'
  icon: string
  qnt: number
  title: string
  variance?: number
}>()

const borderColor = computed(() => resolveBorderColor(props.type))

const resolveType = (type: string) => {
  switch (type) {
    case 'success':
      return 'green'
    case 'error':
      return 'red'
    case 'warning':
      return 'orange'
    default:
      return 'sky'
  }
}

const resolveBorderColor = (type: string = '') => {
  const color = resolveType(type)
  return `border-${color}-500`
}
</script>

<style lang="scss"></style>
