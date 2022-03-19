<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <nav
    class="sticky top-5 z-50 wrapper text-mandy-50 text-2xl rounded-full m-5 py-2 px-5 bg-gradient-to-b from-mandy-700 to-mandy-800"
  >
    <RouterLink to="/" class="font-bold">home</RouterLink>
    |
    <RouterLink to="/folio" class="font-bold">my works</RouterLink>
    |
    <RouterLink to="/about" class="font-bold">contact</RouterLink>
  </nav>
</template>
