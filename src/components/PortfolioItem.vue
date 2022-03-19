<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    required: false,
  },
  techs: {
    type: Array,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div class="text-gray-50 flex flex-col items-center">
    <img class="rounded-xl w-60" :src="'../assets/' + image + ''" alt="" />
    <h1 class="py-2 text-xl">{{ name }}</h1>
    <h3 class="font-thin">{{ desc }}</h3>
    <div class="flex text-xl">
      <h1 v-for="tech in techs" :key="tech" class="text-mandy-600 px-2">
        {{ tech }}
      </h1>
    </div>
  </div>
</template>
