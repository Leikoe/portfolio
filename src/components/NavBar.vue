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
    class="sticky top-0 z-50 w-full flex justify-center dark:bg-gray-800/70 bg-gray-50/70 backdrop-blur-sm"
  >
    <div
      class="flex items-center justify-between text-2xl w-full lg:w-3/4 p-2 lg:px-0"
    >
      <div class="flex items-center underline-offset-8">
        <RouterLink to="/" class="font-bold mr-5" @click="moveUp">
          <div class="flex items-center">
            <img
              class="w-12 md:w-16 bg-transparent px-3 crisp"
              src="/favicon.ico"
              alt=""
            />
            <h1
              class="font-bold transition-all delay-75 ease-in-out decoration-mandy-700/0"
              :class="
                path == '/'
                  ? 'md:underline decoration-mandy-700/100 decoration-4'
                  : ''
              "
            >
              Leiko
            </h1>
          </div>
        </RouterLink>
        <RouterLink
          to="/works"
          class="hidden md:inline mx-5 transition-all delay-75 ease-in-out decoration-mandy-700/0"
          :class="
            path == '/works'
              ? 'md:underline decoration-mandy-700/100 decoration-4'
              : ''
          "
          @click="moveUp"
          >my works</RouterLink
        >
        <RouterLink
          to="/contact"
          class="hidden md:inline mx-5 transition-all delay-75 ease-in-out decoration-mandy-700/0"
          :class="
            path == '/contact'
              ? 'md:underline decoration-mandy-700/100 decoration-4'
              : ''
          "
          @click="moveUp"
          >contact</RouterLink
        >
      </div>

      <div
        @click="darkModeSwitch()"
        class="border-2 rounded-lg p-1 border-mandy-700 m-2 lg:m-0"
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
}
</style>
