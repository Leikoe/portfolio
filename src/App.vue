<script setup>
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <main class="flex justify-center dark:bg-gray-800 bg-eyesaver min-h-screen">
    <div class="flex flex-col items-center w-full">
      <nav-bar />

      <RouterView />
      <h1 class="mb-5">© 2022 Leiko. All Rights Reserved.</h1>
    </div>
  </main>
</template>

<style>
@import "@/assets/base.css";
</style>
