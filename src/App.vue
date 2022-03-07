<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <main class="flex flex-col items-start bg-gray-800">
    <header class="p-10">
      <div class="wrapper text-white text-2xl">
        <nav>
          <RouterLink to="/" class="font-bold">home</RouterLink> |
          <RouterLink to="/folio" class="font-bold">my works</RouterLink> |
          <RouterLink to="/about" class="font-bold">contact</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </main>
</template>

<style>
@import "@/assets/base.css";

/* #app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

nav {
}

@media (min-width: 1024px) {
  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
} */
</style>
