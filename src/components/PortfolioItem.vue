<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="greetings flex font-sans flex-col">
    <h1 class="green text-3xl font-bold">{{ title }}</h1>
    <h3 class="text-xl font-thin">
      {{ text }}
    </h3>
  </div>
</template>
