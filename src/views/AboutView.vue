<script setup>
import PortfolioItem from "@/components/PortfolioItem.vue";
</script>

<template>
  <div class="folio">
    <h1>This is an about page</h1>

    <PortfolioItem
      title="My  title"
      text="description of my first experience"
    />
    <PortfolioItem
      title="My  title"
      text="description of my first experience"
    />
    <PortfolioItem
      title="My  title"
      text="description of my first experience"
    />
    <PortfolioItem
      title="My  title"
      text="description of my first experience"
    />
    <PortfolioItem
      title="My  title"
      text="description of my first experience"
    />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
