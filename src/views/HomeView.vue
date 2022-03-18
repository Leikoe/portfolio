<script setup>
import FolioView from "./FolioView.vue";
</script>

<template>
  <!-- main content scroll container -->
  <content class="h-screen flex flex-col w-full">
    <!-- Hi -->
    <div class="flex justify-center m-10 items-center m-10 justify-around">
      <div class="w-1/2 flex justify-center items-center">
        <h1 class="flex font-sans flex-col p-5 text-mandy-800">
          <span class="text-9xl pb-5 font-bold"
            >Hi,<br />
            I'm Léo</span
          >
          <span class="text-6xl text-green-400 no-underline font-thin"
            >backend developper</span
          >
        </h1>
      </div>

      <img class="w-96" src="public/computer_illustration.svg" alt="" />
    </div>

    <!-- <FolioView class="w-full" /> -->
  </content>
</template>

<style scoped>
header a {
  color: white;
}
</style>
