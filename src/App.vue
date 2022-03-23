<script setup>
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <main
    class="flex flex-col justify-start items-center bg-eyesaver dark:bg-gray-800 min-h-screen text-gray-700 dark:text-gray-50 text-base"
  >
    <nav-bar />
    <div class="flex flex-col items-center w-3/4">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>

      <h1 class="mb-5 dark:text-gray-50 text-gray-700">
        © 2022 Leiko. All Rights Reserved.
      </h1>
    </div>
  </main>
</template>

<style>
@import "@/assets/base.css";
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-to,
.fade-leave {
  transform: none;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fade-enter {
  transform: translate(10, 0, 0);
}
</style>
