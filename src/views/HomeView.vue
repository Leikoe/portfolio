<script setup>
import FolioView from "@/views/FolioView.vue";
</script>

<template>
  <!-- main content scroll container -->
  <content class="flex flex-col justify-between p-10 space-y-52 pt-0">
    <!-- Hi -->
    <div class="flex justify-center items-center justify-around h-screen">
      <div class="flex justify-center items-center basis-1/2">
        <h1 class="flex font-sans flex-col p-5 text-mandy-700">
          <Transition enter-active-class="opacity-100" enter-from="opacity-0">
            <span
              class="text-9xl pb-5 font-bold transition-all delay-300 ease-out"
              >Hi,<br />
              I'm Léo</span
            >
          </Transition>

          <span class="text-6xl no-underline font-thin"
            >backend developper</span
          >
        </h1>
      </div>

      <img class="basis-1/2 w-96" src="/computer_illustration.svg" alt="" />
    </div>

    <FolioView />
  </content>
</template>

<style scoped>
header a {
  color: white;
}
</style>
