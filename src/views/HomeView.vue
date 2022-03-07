<script setup>
import FolioView from "./FolioView.vue";
</script>

<template>
  <content class="h-screen flex flex-col w-full justify-center items-start">
    <div class="w-1/2 flex justify-center">
      <h1 class="flex font-sans flex-col p-5 font-bold">
        <span class="text-9xl pb-5"
          >Hi,<br />
          I'm Léo</span
        >
        <span class="text-6xl text-green-400 no-underline"
          >backend developper</span
        >
      </h1>
    </div>

    <!-- <FolioView class="w-full" /> -->
  </content>
</template>

<style scoped>
header a {
  color: white;
}
</style>
