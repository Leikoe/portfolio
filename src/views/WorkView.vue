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
  image: {
    type: String,
  },
  status: {
    type: String,
  },
});
</script>

<template>
  <!-- main content scroll container -->
  <content
    class="flex flex-col justify-start md:justify-between md:p-10 space-y-20 md:space-y-30 pt-0 items-center font-mono"
  >
    <div>
      <h1>{{ name }}</h1>
    </div>
  </content>
</template>
