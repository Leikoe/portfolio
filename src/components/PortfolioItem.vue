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
  skills: {
    type: Array,
    required: false,
  },
  image: {
    type: String,
  },
});

function getImage(image) {
  return new URL("../assets/" + image, import.meta.url).href;
}
</script>

<template>
  <div class="text-gray-50 flex flex-col items-center text-center">
    <img
      class="inset-0 w-60 h-35 object-cover rounded-lg hover:cursor-pointer"
      :src="getImage(image)"
      alt=""
    />
    <h1 class="py-2 text-xl">{{ name }}</h1>
    <h1 class="text-md font-thin">{{ desc }}</h1>
    <div class="flex">
      <h1
        v-for="skill in skills"
        :key="skill"
        class="text-sm text-mandy-600 px-2"
      >
        {{ skill }}
      </h1>
    </div>
  </div>
</template>
