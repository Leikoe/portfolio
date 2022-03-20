<script setup>
import PortfolioItem from "@/components/PortfolioItem.vue";

var data = [
  {
    image: "GUI.png",
    name: "Stonks",
    desc: "Hypixel skyblock AH flipping bot",
    text: "This was my main project for almost 2 years, it is a sniping tool for the game Hypixel Skyblock, it's a bot which scans the ingame market 24/7 and notifies you when an item has been put up for sale for too low, which you can then easely buy with the keybinds of the `ingame mod` or from the `discord bot` feed. I started the project alone and in mid 2021, I met Refactor, a friend who helped me with the project and taught me `c++` aswell as `flask`. This project taught me almost everything I know about low level programming, optimisation, algorithms and networks.",
    date: "2020",
    skills: ["py", "js", "go", "cpp", "rust", "java", "kotlin"],
  },
  {
    image: "NSG.png",
    name: "NSG",
    desc: "NFT sniping bot",
    text: "NSG is a discord me and some friends which I made along my NFT/WEB3 journey created. In this discord I made a bot which notifies us when nft collections reveal and tells us which nfts are the cheapest on opensea, to then buy and resell for massive profits. I learned rust along the way. Refactor helped me with some performance issues and brainstorming here. I learned a lot more optimisation along the way.",
    date: "2022 february - ?",
    skills: ["rust"],
  },
  {
    image: "blitzsolver.jpg",
    name: "WordBlitz Solver",
    desc: "WordBlitz self playing bot",
    text: "When I saw my parents play a little scrabble like mobile game, I had the idea of making a bot which plays the game by itself using the scrabble dictionnary (which i had to store in a specific made data structure for lookup performance). Using tesseract to get the board letters into python and using DFS to find the possible words. PYautoGUI was also used to fake mouse inputs and let python play the game on an Android emulator (NOX). This project taught me python oop, aswell as OCR and pyautogui + it was the early introduction to data structures and algorithmic optimisation for me.",
    date: "2021 january",
    skills: ["python", "tesseract"],
  },
  {
    image: "blitzsolver.jpg",
    name: "Voxel Game engine",
    desc: "A 3d voxel game engine made in WindowsForms .NET",
    text: "In class we were taught how to draw lines, points and circles in a windows forms .NET application. I had the idea of making a game loop using the Invalidate() method, which allowed me to then make a rendering engine using matrix maths. This turned into a mincraft clone. This project mostly made me more comfortable about using matrices and Trigonometry.",
    date: "2022 march - ?",
    skills: [".NET", "c#", "WindowsForms"],
  },
  {
    image: "stairsio.jpg",
    name: "Stairs.io",
    desc: "A simple flappy bird like mobile game",
    text: "Stairs.io is my first mobile game, I created it for education purposes and learned c# while making it aswell as Unity.",
    date: "2020",
    skills: ["Unity", "c#"],
  },
  {
    image: "exotic_cafe.png",
    name: "Exotic Café",
    desc: "A discord for Hypixel Skyblock exotic armor collectors",
    text: "Exotic Café is the discord community I created for the game Hypixel Skyblock, it's a community for collectors of some special ingame items. I learned community moderation and management aswell as adobe illustrator while making the different logos. The discord was created with my coop Vincent and two other friends (Rias_dono and Axore). I'm extremely grateful for the amazing moderation team and the admins <3.",
    date: "2020-2022",
    skills: ["Adobe Illustrator", "Communication"],
  },
];
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <div class="flex justify-start items-center flex-col">
      <h1 class="text-4xl pb-5 font-bold text-gray-800 dark:text-gray-50 mb-5">
        My works
      </h1>
      <div
        class="flex flex-col md:flex-row items-center flex-wrap justify-center md:w-1/2"
      >
        <PortfolioItem
          v-for="item in data"
          :key="item.date"
          v-bind:name="item.name"
          v-bind:desc="item.desc"
          v-bind:text="item.text"
          v-bind:date="item.date"
          v-bind:image="item.image"
          v-bind:skills="item.skills"
          class="my-10 md:w-1/2"
        ></PortfolioItem>
      </div>
    </div>
  </div>
</template>
