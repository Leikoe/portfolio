<script setup>
import FolioView from "@/views/FolioView.vue";
</script>

<template>
  <!-- main content scroll container -->
  <content
    class="flex flex-col justify-start md:justify-between md:p-10 space-y-60 pt-0 items-center w-4/5"
  >
    <!-- Hi -->
    <div
      class="flex flex-col md:flex-row justify-start md:justify-between items-center w-full min-h-screen"
    >
      <div class="flex justify-start items-center md:basis-1/2 w-full">
        <h1
          class="flex font-sans flex-col p-5 dark:text-mandy-50 text-gray-700"
        >
          <Transition enter-active-class="opacity-100" enter-from="opacity-0">
            <span
              class="text-2xl md:text-9xl md:pb-5 font-bold transition-all delay-75 ease-in-out"
              >Hi,<br class="hidden md:block" />
              I'm
              <span class="text-mandy-700 font-bold">Léo</span>.</span
            >
          </Transition>

          <span class="text:lg md:text-6xl no-underline font-thin"
            >backend developper</span
          >
        </h1>
      </div>

      <img
        class="hidden md:block basis-1/2 w-96"
        src="@/assets/computer_illustration.svg"
        alt=""
      />
    </div>

    <FolioView class="hidden md:block" />
  </content>
</template>

<style scoped>
header a {
  color: white;
}
</style>
