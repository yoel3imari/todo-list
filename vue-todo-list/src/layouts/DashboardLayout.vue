<template>
  <div class="bg-gray-50 h-full min-h-full w-full">
    <div class="h-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
      <nav class="hidden md:flex flex-col inset-0 h-screen bg-white col-span-1">
        <div id="logo" class="py-4 border-b mb-2">
          <Link to="/dashboard/overview">
            <h1 class="text-4xl font-bold text-sky-500 m-0 text-center">Todo</h1>
          </Link>
        </div>
        <ul class="m-0 flex-1 h-full overflow-auto flex flex-col gap-1 ps-2">
          <li v-for="(v, i) in 15" :key="i" class="hover:bg-sky-100 hover:text-sky-500 translate-all rounded-lg">
            <Link :to="{name: 'dashboard-overview'}" class="py-4 px-2 block w-full h-full">Link {{ v }}</Link>
          </li>
        </ul>
        <div>
          <Link to="/dashboard/overview">
            <h1 class="text-xl py-4 border-t mt-2 font-bold text-sky-500 m-0 text-center">Sign Out</h1>
          </Link>
        </div>
      </nav>
      
      <div class="col-span-2 md:col-span-3 lg:col-span-5">
        <header></header>
        <main>
          <router-view />
        </main>
        <footer></footer>
      </div>
    
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink as Link } from 'vue-router'
</script>

<style lang="scss"></style>
