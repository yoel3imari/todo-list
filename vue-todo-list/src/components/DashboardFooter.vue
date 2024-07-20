<template>
  <footer class="h-8 text-sky-400 font-extralight text-xs flex items-center justify-center text-center">
    <span>{{year.getFullYear()}}&copy;yoel3imari</span>
  </footer>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const year = ref(new Date())
</script>

<style lang="scss"></style>
