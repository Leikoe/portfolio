<script setup>
import PortfolioItem from "@/components/PortfolioItem.vue";
import data from "../../public/portfolio.json";

defineProps({
  max: {
    type: Number,
  },
  header: {
    type: String,
  },
});
</script>

<template>
  <div class="flex w-full flex-col items-center justify-center xl:py-10">
    <div class="flex w-full flex-col items-center justify-start">
      <h1
        class="mb-10 text-center text-4xl font-bold text-gray-800 underline decoration-mandy-700 decoration-4 underline-offset-8 dark:text-gray-50 xl:mb-5 xl:pb-5"
      >
        {{ header ? header : "My works" }}
      </h1>
      <div
        class="mt-10 flex w-full flex-col flex-wrap items-center justify-start sm:flex-row sm:justify-between"
      >
        <PortfolioItem
          v-for="item in data.slice(0, max ? max : data.length)"
          :key="item.date"
          v-bind:name="item.name"
          v-bind:status="item.status"
          v-bind:desc="item.desc"
          v-bind:images="item.images"
          v-bind:text="item.text"
          v-bind:date="item.date"
          v-bind:skills="item.skills"
          class="w-full sm:w-1/2 sm:p-2"
        ></PortfolioItem>
      </div>
    </div>
  </div>
</template>
