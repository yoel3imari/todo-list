<template>
  <AppLayout>
    <HomeHeader />
    <main class="h-[calc(100%-80px)] container mx-4 md:mx-auto">
      <div id="hero" class="h-full flex items-center justify-between">
        
        <div class="w-full md:w-1/2 mb-16 flex-items-center justify-center text-center md:text-start" id="headline">
          <h1 class="text-5xl font-extrabold">Todo</h1>
          <h2 class="text-4xl font-extrabold text-sky-500">The place where you put it all Together</h2>
          <p class="font-semibold mt-2 text-[18px]">
            Designed to streamline your daily tasks and boost your efficiency to make give you more <span class="font-bold bg-sky-500 text-white p-[1px]">Focus</span>. With Todo, managing your to-do list has never been easier.
          </p>
        </div>
      
        <div class="hidden md:block md:w-[500px] h-full">
          <div class="bg-[url('/images/hero.png')] bg-container p-4 bg-no-repeat bg-center w-full h-full "></div>
        </div>
      
      </div>
    </main>
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { RouterLink as Link } from 'vue-router';
import HomeHeader from '@/components/HomeHeader.vue';

</script>

<style lang="scss"></style>