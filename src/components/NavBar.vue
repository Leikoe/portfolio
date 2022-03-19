<script setup>
import { RouterView } from "vue-router";

var isDark = true;
isDark
  ? document.body.classList.add("dark")
  : document.body.classList.remove("dark");

function darkModeSwitch(val) {
  isDark = !isDark;
  isDark
    ? document.body.classList.add("dark")
    : document.body.classList.remove("dark");
}
</script>

<template>
  <nav
    class="flex items-center justify-between sticky top-0 z-50 wrapper text-gray-800 dark:text-mandy-50 text-2xl p-5 w-full dark:bg-gray-800 opacity-70 bg-eyesaver"
  >
    <div class="flex items-center">
      <RouterLink to="/" class="font-bold mx-5">
        <div class="flex items-center w-fit">
          <img class="w-10 bg-transparent p-2 px-3" src="pfp.png" alt="" />
          <h1 class="font-bold">Leiko</h1>
        </div>
      </RouterLink>
      <RouterLink to="/folio" class="mx-5">my works</RouterLink>
      <RouterLink to="/about" class="mx-5">contact</RouterLink>
    </div>

    <div
      @click="darkModeSwitch()"
      class="border-2 rounded-lg p-1 border-mandy-700"
    >
      <img class="block dark:hidden" src="dark_mode_black_24dp.svg" alt="" />
      <img class="hidden dark:block" src="light_mode_white_24dp.svg" alt="" />
    </div>
  </nav>
</template>
