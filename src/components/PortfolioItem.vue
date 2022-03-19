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
  year: {
    type: Number,
    required: true,
  },
  techs: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div
    class="flex w-1/2 bg-gradient-to-b from-mandy-700 to-mandy-800 rounded-xl shadow-gray-500 shadow-lg"
  >
    <div class="w-96">
      <img
        class="inset-0 w-full h-full object-cover"
        src="https://t3.ftcdn.net/jpg/03/15/34/90/360_F_315349043_6ohfFyx37AFusCKZtGQtJR0jqUxhb25Y.jpg"
        alt=""
      />
    </div>

    <div class="flex font-sans flex-col dark:text-mandy-200 p-6 w-1/2">
      <h1 class="text-mandy-100 text-3xl font-bold pb-5">{{ title }}</h1>
      <h3 class="text-mandy-300 text-xl font-thin">
        {{ text }}
      </h3>
    </div>
  </div>
</template>
