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
  },
  date: {
    type: String,
  },
  skills: {
    type: Array,
  },
  images: {
    type: Array,
  },
  status: {
    type: String,
  },
});

// var formattedText = this.text
//   .replace(" `", '<span class="highlight">')
//   .replace("` ", "<span />");
</script>

<template>
  <!-- main content scroll container -->
  <content class="my-5 flex w-full flex-col items-center text-lg">
    <div class="my-5">
      <!-- @click="$router.back()" -->

      <RouterLink
        to="/works"
        class="inline-block cursor-pointer pr-1 text-lg text-mandy-300 underline-offset-4 hover:underline"
        >Works</RouterLink
      >

      >

      <h1 class="inline-block px-1 text-xl font-bold">{{ name }}</h1>
      <h1 class="mx-1 inline-block rounded-lg bg-mandy-300 px-1 text-xs">
        {{ date }}
      </h1>

      <div class="mb-5 flex w-full flex-wrap">
        <div
          v-for="skill in skills"
          :key="skill"
          class="mx-1 my-1 rounded-lg bg-gray-600 px-1.5 py-0.5 text-xs font-normal text-gray-200 dark:bg-gray-200 dark:text-gray-700"
        >
          <h1>
            {{ skill }}
          </h1>
        </div>
      </div>

      <p class="my-5 text-justify text-xl">{{ desc }}</p>

      <p class="text-justify indent-5">{{ text }}</p>

      <div class="my-5 flex flex-col items-center space-y-5">
        <img
          v-for="image in images"
          :key="image"
          :src="'/' + image"
          alt=""
          class="inset-0 w-full rounded-lg object-cover hover:cursor-pointer"
        />
      </div>
    </div>
  </content>
</template>
