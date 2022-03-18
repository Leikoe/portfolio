<script setup>
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <main class="flex flex-col items-start">
    <nav-bar />

    <RouterView />
  </main>
</template>

<style>
@import "@/assets/base.css";
</style>
