<script setup>
import { RouterView } from "vue-router";

var isDark = true;
document.body.classList.add("dark");

function darkModeSwitch(val) {
  isDark = !isDark;
  isDark
    ? document.body.classList.add("dark")
    : document.body.classList.remove("dark");
}

import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const path = computed(() => route.path);

function moveUp() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<template>
  <nav
    class="sticky top-0 z-50 flex w-full justify-center bg-gray-50/70 backdrop-blur-sm dark:bg-gray-800/70"
  >
    <div
      class="flex w-full items-center justify-between p-2 text-2xl lg:w-3/4 lg:px-0"
    >
      <div class="flex items-center underline-offset-8">
        <RouterLink to="/" class="mr-5 font-bold" @click="moveUp">
          <div class="flex items-center">
            <img
              class="bg-transparent crisp w-12 px-3 md:w-16"
              src="/favicon.ico"
              alt=""
            />
            <h1
              class="font-bold decoration-mandy-700/0 transition-all delay-75 ease-in-out"
              :class="
                path == '/'
                  ? 'decoration-mandy-700/100 decoration-4 md:underline'
                  : ''
              "
            >
              Leiko
            </h1>
          </div>
        </RouterLink>
        <RouterLink
          to="/works"
          class="mx-5 inline decoration-mandy-700/0 transition-all delay-75 ease-in-out md:inline"
          :class="
            path == '/works'
              ? 'decoration-mandy-700/100 decoration-4 md:underline'
              : ''
          "
          @click="moveUp"
          >my works</RouterLink
        >
        <RouterLink
          to="/contact"
          class="mx-5 hidden decoration-mandy-700/0 transition-all delay-75 ease-in-out md:inline"
          :class="
            path == '/contact'
              ? 'decoration-mandy-700/100 decoration-4 md:underline'
              : ''
          "
          @click="moveUp"
          >contact</RouterLink
        >
      </div>

      <div
        @click="darkModeSwitch()"
        class="m-2 rounded-lg border-2 border-mandy-700 p-1 lg:m-0"
      >
        <img class="block dark:hidden" src="/dark_mode_black_24dp.svg" alt="" />
        <img
          class="hidden dark:block"
          src="/light_mode_white_24dp.svg"
          alt=""
        />
      </div>
    </div>
  </nav>
</template>

<style scoped>
.crisp {
  image-rendering: crisp-edges;

  /* Safari seems to support, but seems deprecated and does the same thing as the others. */
  image-rendering: -webkit-optimize-contrast;
}
</style>
