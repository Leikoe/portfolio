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
</script>

<template>
  <div
    class="text-gray-700 dark:text-gray-50 flex flex-col items-center text-center p-10"
  >
    <img
      class="inset-0 w-full object-cover rounded-lg hover:cursor-pointer"
      :src="image"
      alt=""
    />
    <h1 class="pt-4 text-xl">{{ name }}</h1>
    <h1 class="text-md font-thin">{{ desc }}</h1>
    <div class="flex my-2 flex-wrap w-full">
      <div
        v-for="skill in skills"
        :key="skill"
        class="text-sm font-thin text-gray-50 px-1.5 bg-gray-600 dark:bg-mandy-600 rounded-md mx-1 py-0.5 my-1"
      >
        <h1>
          {{ skill }}
        </h1>
      </div>
    </div>
  </div>
</template>
