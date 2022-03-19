<script setup>
import PortfolioItem from "@/components/PortfolioItem.vue";

var data = [
  {
    title: "Stonks (py, js, go, cpp, rust, Java)",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed molestie ipsum. Nunc quis tempus turpis. Maecenas ut enim rhoncus, convallis massa ac, congue felis. Curabitur nec lorem in sapien tristique lacinia vel nec felis. Pellentesque neque nisi, tincidunt in porta a, dictum ac ex. Maecenas eget neque nec libero finibus rutrum. In sit amet tempor risus. Duis tellus erat, hendrerit eget elementum a, mollis a dui. Aenean porttitor tempus metus et volutpat. Quisque semper sem turpis, ac sollicitudin nunc viverra sit amet. In hac habitasse platea dictumst. Sed tincidunt placerat velit, a ornare nisl placerat sit amet. Nam vulputate at erat a porta. Proin tempor lectus leo, id egestas urna mollis eget. Etiam vitae justo felis. ",
    year: 2020,
  },
  {
    title: "NSG {rust)",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed molestie ipsum. Nunc quis tempus turpis. Maecenas ut enim rhoncus, convallis massa ac, congue felis. Curabitur nec lorem in sapien tristique lacinia vel nec felis. Pellentesque neque nisi, tincidunt in porta a, dictum ac ex. Maecenas eget neque nec libero finibus rutrum. In sit amet tempor risus. Duis tellus erat, hendrerit eget elementum a, mollis a dui. Aenean porttitor tempus metus et volutpat. Quisque semper sem turpis, ac sollicitudin nunc viverra sit amet. In hac habitasse platea dictumst. Sed tincidunt placerat velit, a ornare nisl placerat sit amet. Nam vulputate at erat a porta. Proin tempor lectus leo, id egestas urna mollis eget. Etiam vitae justo felis. ",
    year: 2022,
  },
  {
    title: "WordBlitz Solver (python)",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed molestie ipsum. Nunc quis tempus turpis. Maecenas ut enim rhoncus, convallis massa ac, congue felis. Curabitur nec lorem in sapien tristique lacinia vel nec felis. Pellentesque neque nisi, tincidunt in porta a, dictum ac ex. Maecenas eget neque nec libero finibus rutrum. In sit amet tempor risus. Duis tellus erat, hendrerit eget elementum a, mollis a dui. Aenean porttitor tempus metus et volutpat. Quisque semper sem turpis, ac sollicitudin nunc viverra sit amet. In hac habitasse platea dictumst. Sed tincidunt placerat velit, a ornare nisl placerat sit amet. Nam vulputate at erat a porta. Proin tempor lectus leo, id egestas urna mollis eget. Etiam vitae justo felis. ",
    year: 2021,
  },
  {
    title: "3d Voxel Game engine WinForms (c# .NET)",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed molestie ipsum. Nunc quis tempus turpis. Maecenas ut enim rhoncus, convallis massa ac, congue felis. Curabitur nec lorem in sapien tristique lacinia vel nec felis. Pellentesque neque nisi, tincidunt in porta a, dictum ac ex. Maecenas eget neque nec libero finibus rutrum. In sit amet tempor risus. Duis tellus erat, hendrerit eget elementum a, mollis a dui. Aenean porttitor tempus metus et volutpat. Quisque semper sem turpis, ac sollicitudin nunc viverra sit amet. In hac habitasse platea dictumst. Sed tincidunt placerat velit, a ornare nisl placerat sit amet. Nam vulputate at erat a porta. Proin tempor lectus leo, id egestas urna mollis eget. Etiam vitae justo felis. ",
    year: 2022,
  },
  {
    title: "NDI (nodejs, vue, py, mySQL, php, html, css) ",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed molestie ipsum. Nunc quis tempus turpis. Maecenas ut enim rhoncus, convallis massa ac, congue felis. Curabitur nec lorem in sapien tristique lacinia vel nec felis. Pellentesque neque nisi, tincidunt in porta a, dictum ac ex. Maecenas eget neque nec libero finibus rutrum. In sit amet tempor risus. Duis tellus erat, hendrerit eget elementum a, mollis a dui. Aenean porttitor tempus metus et volutpat. Quisque semper sem turpis, ac sollicitudin nunc viverra sit amet. In hac habitasse platea dictumst. Sed tincidunt placerat velit, a ornare nisl placerat sit amet. Nam vulputate at erat a porta. Proin tempor lectus leo, id egestas urna mollis eget. Etiam vitae justo felis. ",
    year: 2021,
  },
  {
    title: "Exotic DB (py, mongo)",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed molestie ipsum. Nunc quis tempus turpis. Maecenas ut enim rhoncus, convallis massa ac, congue felis. Curabitur nec lorem in sapien tristique lacinia vel nec felis. Pellentesque neque nisi, tincidunt in porta a, dictum ac ex. Maecenas eget neque nec libero finibus rutrum. In sit amet tempor risus. Duis tellus erat, hendrerit eget elementum a, mollis a dui. Aenean porttitor tempus metus et volutpat. Quisque semper sem turpis, ac sollicitudin nunc viverra sit amet. In hac habitasse platea dictumst. Sed tincidunt placerat velit, a ornare nisl placerat sit amet. Nam vulputate at erat a porta. Proin tempor lectus leo, id egestas urna mollis eget. Etiam vitae justo felis. ",
    year: 2020,
  },
  {
    title: "STLK (nodejs, vue, html, css, figma)",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed molestie ipsum. Nunc quis tempus turpis. Maecenas ut enim rhoncus, convallis massa ac, congue felis. Curabitur nec lorem in sapien tristique lacinia vel nec felis. Pellentesque neque nisi, tincidunt in porta a, dictum ac ex. Maecenas eget neque nec libero finibus rutrum. In sit amet tempor risus. Duis tellus erat, hendrerit eget elementum a, mollis a dui. Aenean porttitor tempus metus et volutpat. Quisque semper sem turpis, ac sollicitudin nunc viverra sit amet. In hac habitasse platea dictumst. Sed tincidunt placerat velit, a ornare nisl placerat sit amet. Nam vulputate at erat a porta. Proin tempor lectus leo, id egestas urna mollis eget. Etiam vitae justo felis. ",
    year: 2021,
  },
  {
    title: "Exotic escobar (twitter api, py)",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed molestie ipsum. Nunc quis tempus turpis. Maecenas ut enim rhoncus, convallis massa ac, congue felis. Curabitur nec lorem in sapien tristique lacinia vel nec felis. Pellentesque neque nisi, tincidunt in porta a, dictum ac ex. Maecenas eget neque nec libero finibus rutrum. In sit amet tempor risus. Duis tellus erat, hendrerit eget elementum a, mollis a dui. Aenean porttitor tempus metus et volutpat. Quisque semper sem turpis, ac sollicitudin nunc viverra sit amet. In hac habitasse platea dictumst. Sed tincidunt placerat velit, a ornare nisl placerat sit amet. Nam vulputate at erat a porta. Proin tempor lectus leo, id egestas urna mollis eget. Etiam vitae justo felis. ",
    year: 2020,
  },
  {
    title: "Lowatem AlphaZero (Java)",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed molestie ipsum. Nunc quis tempus turpis. Maecenas ut enim rhoncus, convallis massa ac, congue felis. Curabitur nec lorem in sapien tristique lacinia vel nec felis. Pellentesque neque nisi, tincidunt in porta a, dictum ac ex. Maecenas eget neque nec libero finibus rutrum. In sit amet tempor risus. Duis tellus erat, hendrerit eget elementum a, mollis a dui. Aenean porttitor tempus metus et volutpat. Quisque semper sem turpis, ac sollicitudin nunc viverra sit amet. In hac habitasse platea dictumst. Sed tincidunt placerat velit, a ornare nisl placerat sit amet. Nam vulputate at erat a porta. Proin tempor lectus leo, id egestas urna mollis eget. Etiam vitae justo felis. ",
    year: 2021,
  },
  {
    title: "CTJS (js)",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed molestie ipsum. Nunc quis tempus turpis. Maecenas ut enim rhoncus, convallis massa ac, congue felis. Curabitur nec lorem in sapien tristique lacinia vel nec felis. Pellentesque neque nisi, tincidunt in porta a, dictum ac ex. Maecenas eget neque nec libero finibus rutrum. In sit amet tempor risus. Duis tellus erat, hendrerit eget elementum a, mollis a dui. Aenean porttitor tempus metus et volutpat. Quisque semper sem turpis, ac sollicitudin nunc viverra sit amet. In hac habitasse platea dictumst. Sed tincidunt placerat velit, a ornare nisl placerat sit amet. Nam vulputate at erat a porta. Proin tempor lectus leo, id egestas urna mollis eget. Etiam vitae justo felis. ",
    year: 2021,
  },
  {
    title: "Nike scrapping bot (py)",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed molestie ipsum. Nunc quis tempus turpis. Maecenas ut enim rhoncus, convallis massa ac, congue felis. Curabitur nec lorem in sapien tristique lacinia vel nec felis. Pellentesque neque nisi, tincidunt in porta a, dictum ac ex. Maecenas eget neque nec libero finibus rutrum. In sit amet tempor risus. Duis tellus erat, hendrerit eget elementum a, mollis a dui. Aenean porttitor tempus metus et volutpat. Quisque semper sem turpis, ac sollicitudin nunc viverra sit amet. In hac habitasse platea dictumst. Sed tincidunt placerat velit, a ornare nisl placerat sit amet. Nam vulputate at erat a porta. Proin tempor lectus leo, id egestas urna mollis eget. Etiam vitae justo felis. ",
    year: 2020,
  },
  {
    title: "Stairs.io (c#)",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed molestie ipsum. Nunc quis tempus turpis. Maecenas ut enim rhoncus, convallis massa ac, congue felis. Curabitur nec lorem in sapien tristique lacinia vel nec felis. Pellentesque neque nisi, tincidunt in porta a, dictum ac ex. Maecenas eget neque nec libero finibus rutrum. In sit amet tempor risus. Duis tellus erat, hendrerit eget elementum a, mollis a dui. Aenean porttitor tempus metus et volutpat. Quisque semper sem turpis, ac sollicitudin nunc viverra sit amet. In hac habitasse platea dictumst. Sed tincidunt placerat velit, a ornare nisl placerat sit amet. Nam vulputate at erat a porta. Proin tempor lectus leo, id egestas urna mollis eget. Etiam vitae justo felis. ",
    year: 2020,
  },
];
</script>

<template>
  <div class="folio flex justify-center flex-col w-full">
    <h1 class="text-9xl pb-5 font-bold text-gray-800 mb-20">My past work</h1>

    <PortfolioItem
      v-for="item in data"
      :key="item.year"
      v-bind:title="item.title"
      v-bind:text="item.text"
      v-bind:year="item.year"
      class="m-5"
    ></PortfolioItem>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .folio {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
