<script setup>
import PortfolioItem from "@/components/PortfolioItem.vue";

var data = [
  {
    image: "GUI.png",
    name: "Stonks",
    desc: "Hypixel skyblock AH flipping bot",
    text: "This was my main project for almost 2 years, it is a sniping tool for the game Hypixel Skyblock, it's a bot which scans the ingame market 24/7 and notifies you when an item has been put up for sale for too low, which you can then easely buy with the keybinds of the `ingame mod` or from the `discord bot` feed. I started the project alone and in mid 2021, I met Refactor, a friend who helped me with the project and taught me `c++` aswell as `flask`. This project taught me almost everything I know about low level programming, optimisation, algorithms and networks.",
    date: "2020",
    techs: ["py", "js", "go", "cpp", "rust", "java"],
  },
  {
    image: "NSG.png",
    name: "NSG",
    desc: "NFT sniping bot",
    text: "NSG is a discord me and some friends which I made along my NFT/WEB3 journey created. In this discord I made a bot which notifies us when nft collections reveal and tells us which nfts are the cheapest on opensea, to then buy and resell for massive profits. I learned rust along the way. Refactor helped me with some performance issues and brainstorming here. I learned a lot more optimisation along the way.",
    date: "2022 february - ?",
    techs: ["rust"],
  },
];
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <div class="flex justify-start items-center flex-col">
      <h1 class="text-4xl pb-5 font-bold text-gray-800 dark:text-gray-50 mb-5">
        My past work
      </h1>
      <div class="flex items-center flex-wrap w-1/2">
        <!-- <PortfolioItem
          v-for="item in data"
          :key="item.date"
          v-bind:name="item.name"
          v-bind:desc="item.desc"
          v-bind:text="item.text"
          v-bind:date="item.date"
          v-bind:image="item.image"
          class="mx-4 my-10"
        ></PortfolioItem> -->
      </div>
    </div>
  </div>
</template>
