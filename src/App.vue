<script setup>
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import VoxelPfp from "@/components/VoxelPfp.vue";
import { useMotions } from "@vueuse/motion";
</script>

<template>
  <main
    class="flex min-h-screen flex-col items-center justify-start bg-eyesaver text-base text-gray-700 dark:bg-gray-800 dark:text-gray-50"
  >
    <nav-bar class="z-20" />
    <div class="flex w-3/4 flex-col items-center">
      <!-- credits to craftzdog -->
      <VoxelPfp class="z-10 flex w-1/2 justify-center"></VoxelPfp>

      <!-- <div class="m-10 w-1/2 sm:w-1/6 lg:mb-0">
        <img class="rounded-full" src="/pfp.png" alt="" />
      </div> -->

      <router-view v-slot="{ Component }">
        <transition
          :css="false"
          v-on:leave="(el, done) => useMotions().main.leave(done)"
        >
          <component
            class="relative -top-32 z-20 max-w-prose font-mono"
            :is="Component"
            v-motion="'main'"
            :initial="{
              opacity: 0,
              y: 20,
            }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: {
                y: {
                  delay: 500,
                  duration: 1000,
                },
                opacity: {
                  delay: 900,
                  duration: 500,
                },
              },
            }"
            :leave="{
              y: 20,
              opacity: 0,
              transition: {
                y: {
                  delay: 0,
                  duration: 1000,
                },
                opacity: {
                  delay: 200,
                  duration: 500,
                },
              },
            }"
          ></component>
        </transition>
      </router-view>

      <h1 class="mb-5 text-gray-700/50 dark:text-gray-50/50">
        © 2022 Leiko. All Rights Reserved.
      </h1>
    </div>
  </main>
</template>

<style>
@import "@/assets/base.css";
</style>
