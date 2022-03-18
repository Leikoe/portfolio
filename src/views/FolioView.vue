<script setup>
import PortfolioItem from "@/components/PortfolioItem.vue";

var data = [{ title: "test title", text: "test text" }];
</script>

<template>
  <div class="folio flex justify-center flex-col w-full">
    <PortfolioItem
      v-for="item in data"
      :key="item.title"
      v-bind:title="item.title"
      v-bind:text="item.text"
    ></PortfolioItem>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .folio {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
