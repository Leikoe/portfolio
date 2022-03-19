<script setup>
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <main class="flex justify-center dark:bg-gray-800 bg-eyesaver">
    <div class="flex flex-col items-center">
      <nav-bar />

      <RouterView />
    </div>
  </main>
</template>

<style>
@import "@/assets/base.css";
</style>
