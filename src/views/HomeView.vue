<script setup>
import WorksView from "@/views/WorksView.vue";
</script>

<template>
  <!-- main content scroll container -->
  <content
    class="flex flex-col justify-start md:justify-between md:p-10 space-y-20 md:space-y-30 pt-0 items-center font-mono"
  >
    <!-- Hi -->
    <div
      class="flex flex-col md:flex-row justify-start md:justify-between items-center w-full md:min-h-screen"
    >
      <div class="w-1/2 md:hidden m-10">
        <img class="rounded-full" src="/pfp.png" alt="" />
      </div>

      <div class="flex justify-start items-center md:basis-1/2 w-full">
        <h1 class="flex flex-col md:p-5">
          <Transition enter-active-class="opacity-100" enter-from="opacity-0">
            <span
              class="text-2xl md:text-9xl md:pb-5 font-bold transition-all delay-75 ease-in-out"
              >Hi,<br class="hidden md:block" />
              I'm
              <span class="text-mandy-700 font-bold">Léo</span>.</span
            >
          </Transition>

          <span class="text:lg md:text-6xl no-underline font-thin"
            >backend developper</span
          >
        </h1>
      </div>

      <img
        class="hidden md:block basis-1/2 w-96"
        src="@/assets/computer_illustration.svg"
        alt=""
      />
    </div>

    <div class="md:w-1/2 md:p-10 pt-0 !mt-5">
      <span
        class="underline text-2xl font-bold underline-offset-4 decoration-4 py-2 inline-block decoration-gray-500"
        >Bio</span
      ><br />
      <h1
        class="indent-5 text-justify text-lg md:text-2xl leading-snug font-thin tracking-tight"
      >
        I'm a french developper based in Bordeaux. I started algorithms at 8 and
        started coding at 10 years old, but stopped to play games a year or two
        after. I've been learning science since then, but in 2017-2018 I started
        coding again, and this time I had projects.
      </h1>
    </div>

    <WorksView />
  </content>
</template>

<style scoped>
header a {
  color: white;
}
</style>
