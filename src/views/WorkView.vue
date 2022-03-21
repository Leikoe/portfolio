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
  <content class="flex flex-col w-full items-center text-lg">
    <div class="lg:w-1/3 m-5">
      <a
        @click="$router.back()"
        class="text-mandy-300 inline-block pr-1 cursor-pointer hover:underline underline-offset-4 text-lg"
        >Works</a
      >
      >
      <h1 class="inline-block font-bold px-1 text-xl">{{ name }}</h1>
      <h1 class="bg-mandy-300 inline-block px-1 rounded-lg text-xs mx-1">
        {{ date }}
      </h1>

      <div class="flex flex-wrap w-full mb-5">
        <div
          v-for="skill in skills"
          :key="skill"
          class="text-xs font-normal text-gray-200 dark:text-gray-700 px-1.5 bg-gray-600 dark:bg-gray-200 rounded-lg mx-1 py-0.5 my-1"
        >
          <h1>
            {{ skill }}
          </h1>
        </div>
      </div>

      <p class="text-justify text-xl my-5">{{ desc }}</p>

      <p class="indent-5 text-justify">{{ text
  .replace(" `", '<span class="highlight">')
  .replace("` ", "<span />"); }}</p>

      <div class="flex flex-col items-center my-5 space-y-5">
        <img
          v-for="image in images"
          :key="image"
          :src="'/' + image"
          alt=""
          class="inset-0 w-full object-cover rounded-lg hover:cursor-pointer"
        />
      </div>
    </div>
  </content>
</template>

<style scoped>
.highlight {
  color: aqua;
}
</style>
