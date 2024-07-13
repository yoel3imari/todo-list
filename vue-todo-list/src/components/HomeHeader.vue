<template>

  <header class="container mx-auto h-20 flex items-center justify-between">
    <div class="logo">
      <Link to="/" class="font-bold text-sky-500 text-3xl">Todo</Link>
    </div>
    <nav>
      <ul class="flex gap-4 font-semibold">
        <li>
          <Link to="/auth/login"
            class="text-sky-500 bg-sky-100 border border-sky-500 py-2 px-4 rounded-full block min-w-[100px] text-center">
          Sign In</Link>
        </li>
        <li>
          <Link to="/auth/sign-up"
            class="bg-sky-500 text-white border border-sky-500 py-2 px-4 rounded-full transition-all block min-w-[100px] text-center">
          Sign Up</Link>
        </li>
      </ul>
    </nav>
  </header>

</template>

<script setup lang="ts">
import { RouterLink as Link } from 'vue-router';
</script>

<style lang="scss"></style>