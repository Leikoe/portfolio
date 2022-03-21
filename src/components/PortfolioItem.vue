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
</script>

<template>
  <div
    class="flex flex-col items-center text-center justify-start w-96 lg:w-72 mb-20 lg:h-96 last-of-type:mb-10"
  >
    <!-- TODO: create WorkView View -->
    <!-- TODO: add router push to WorkView with props as params -->

    <img
      class="inset-0 h-30 object-contain rounded-lg hover:cursor-pointer"
      @click="viewItem()"
      :src="images[0]"
      alt=""
    />
    <h1 class="pt-4 text-xl">{{ name }}</h1>
    <h1 class="text-lg font-thin">{{ desc }}</h1>
    <div class="flex my-2 flex-wrap w-full h-20">
      <div
        v-for="skill in skills"
        :key="skill"
        class="text-sm font-normal text-gray-200 px-1.5 bg-gray-600 dark:bg-mandy-600 rounded-lg mx-1 py-0.5 my-1 h-6"
      >
        <h1>
          {{ skill }}
        </h1>
      </div>
    </div>
  </div>
</template>

//
<script>
export default {
  methods: {
    viewItem: function () {
      this.$router.push({
        name: "Work",
        params: {
          name: this.name,
          desc: this.desc,
          text: this.text,
          date: this.date,
          skills: this.skills,
          images: this.images,
          status: this.status,
        },
      });
    },
  },
};
</script>
