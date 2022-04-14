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
  <div class="flex flex-col items-center justify-start text-center sm:h-96">
    <!-- TODO: create WorkView View -->
    <!-- TODO: add router push to WorkView with props as params -->

    <img
      class="h-30 inset-0 rounded-lg object-contain hover:cursor-pointer"
      @click="viewItem()"
      :src="images[0]"
      alt=""
    />
    <h1 class="pt-4 text-lg">{{ name }}</h1>
    <h1 class="font-thin">{{ desc }}</h1>
    <div class="my-2 flex h-20 w-full flex-wrap">
      <div
        v-for="skill in skills"
        :key="skill"
        class="mx-1 my-1 h-6 rounded-lg bg-gray-600 px-1.5 py-0.5 text-sm font-normal text-gray-50 dark:bg-mandy-600"
      >
        <h1>
          {{ skill }}
        </h1>
      </div>
    </div>
  </div>
</template>

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
