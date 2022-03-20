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

import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const path = computed(() => route.path);
</script>

<template>
  <nav
    class="sticky top-0 z-50 w-full flex justify-center dark:bg-gray-800/70 bg-gray-50/70"
  >
    <div
      class="flex items-center justify-between text-2xl md:p-5 md:w-2/3 w-full p-2"
    >
      <div class="flex items-center underline-offset-8">
        <RouterLink to="/" class="font-bold mr-5">
          <div class="flex items-center w-fit">
            <img
              class="w-10 bg-transparent p-2 px-3"
              src="/favicon.ico"
              alt=""
            />
            <h1
              class="font-bold"
              :class="
                path == '/'
                  ? 'md:underline decoration-mandy-700 decoration-4'
                  : ''
              "
            >
              Leiko
            </h1>
          </div>
        </RouterLink>
        <RouterLink
          to="/works"
          class="hidden md:inline mx-5"
          :class="
            path == '/works'
              ? 'md:underline decoration-mandy-700 decoration-4'
              : ''
          "
          >my works</RouterLink
        >
        <RouterLink
          to="/contact"
          class="hidden md:inline mx-5"
          :class="
            path == '/contact'
              ? 'md:underline decoration-mandy-700 decoration-4'
              : ''
          "
          >contact</RouterLink
        >
      </div>

      <div
        @click="darkModeSwitch()"
        class="border-2 rounded-lg p-1 border-mandy-700 m-2"
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
