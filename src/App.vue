<script setup>
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <main
    class="flex flex-col justify-center dark:bg-gray-800 bg-eyesaver min-h-screen items-center"
  >
    <nav-bar />
    <div class="flex flex-col items-center w-4/5">
      <RouterView />
      <h1 class="mb-5 dark:text-gray-50 text-gray-700">
        © 2022 Leiko. All Rights Reserved.
      </h1>
    </div>
  </main>
</template>

<style>
@import "@/assets/base.css";
</style>
