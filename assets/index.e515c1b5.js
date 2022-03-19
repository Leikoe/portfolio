import{r as m,o as d,c as u,a as e,b as r,w as i,d as l,u as y,R as v,e as b,T as g,p as k,f as w,g as $,h as L,i as j}from"./vendor.8fd0cf6b.js";const V=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const _ of s.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&a(_)}).observe(document,{childList:!0,subtree:!0});function c(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=c(t);fetch(t.href,s)}};V();var R="/favicon.ico",A="/dark_mode_black_24dp.svg",I="/light_mode_white_24dp.svg";const N={class:"sticky top-0 z-50 w-full flex justify-center dark:bg-gray-800/70 bg-gray-50/70"},O={class:"flex items-center justify-between text-gray-700 dark:text-mandy-50 text-2xl md:p-5 md:w-2/3 w-full p-2"},S={class:"flex items-center"},B=e("div",{class:"flex items-center w-fit"},[e("img",{class:"w-10 bg-transparent p-2 px-3",src:R,alt:""}),e("h1",{class:"font-bold"},"Leiko")],-1),H=l("my works"),T=l("contact"),C=e("img",{class:"block dark:hidden",src:A,alt:""},null,-1),M=e("img",{class:"hidden dark:block",src:I,alt:""},null,-1),E=[C,M],P={setup(n){var o=!0;o?document.body.classList.add("dark"):document.body.classList.remove("dark");function c(a){o=!o,o?document.body.classList.add("dark"):document.body.classList.remove("dark")}return(a,t)=>{const s=m("RouterLink");return d(),u("nav",N,[e("div",O,[e("div",S,[r(s,{to:"/",class:"font-bold mr-5"},{default:i(()=>[B]),_:1}),r(s,{to:"/folio",class:"hidden md:inline mx-5"},{default:i(()=>[H]),_:1}),r(s,{to:"/about",class:"hidden md:inline mx-5"},{default:i(()=>[T]),_:1})]),e("div",{onClick:t[0]||(t[0]=_=>c()),class:"border-2 rounded-lg p-1 border-mandy-700 m-2"},E)])])}}};const q={class:"flex justify-center dark:bg-gray-800 bg-eyesaver min-h-screen"},z={class:"flex flex-col items-center w-full"},D=e("h1",{class:"mb-5"},"\xA9 2022 Leiko. All Rights Reserved.",-1),F={setup(n){return(o,c)=>(d(),u("main",q,[e("div",z,[r(P),r(y(v)),D])]))}};var K="/assets/computer_illustration.a2fd6195.svg";const W={class:"flex flex-col justify-center items-center"},G=e("div",{class:"flex justify-start items-center flex-col"},[e("h1",{class:"text-4xl pb-5 font-bold text-gray-800 dark:text-gray-50 mb-5"}," My past work "),e("div",{class:"flex items-center flex-wrap w-1/2"})],-1),J=[G],p={setup(n){return(o,c)=>(d(),u("div",W,J))}};var h=(n,o)=>{const c=n.__vccOpts||n;for(const[a,t]of o)c[a]=t;return c};const f=n=>(k("data-v-da9c0230"),n=n(),w(),n),Q={class:"flex flex-col md:flex-row justify-start md:justify-between items-center w-full min-h-screen"},U={class:"flex justify-start items-center md:basis-1/2 w-full"},X={class:"flex font-sans flex-col p-5 dark:text-mandy-50 text-gray-700"},Y=f(()=>e("span",{class:"text-2xl md:text-9xl md:pb-5 font-bold transition-all delay-75 ease-in-out"},[l("Hi,"),e("br",{class:"hidden md:block"}),l(" I'm "),e("span",{class:"text-mandy-700 font-bold"},"L\xE9o"),l(".")],-1)),Z=f(()=>e("span",{class:"text:lg md:text-6xl no-underline font-thin"},"backend developper",-1)),ee=f(()=>e("img",{class:"hidden md:block basis-1/2 w-96",src:K,alt:""},null,-1)),te={setup(n){return(o,c)=>{const a=m("content");return d(),b(a,{class:"flex flex-col justify-start md:justify-between md:p-10 space-y-60 pt-0 items-center w-4/5"},{default:i(()=>[e("div",Q,[e("div",U,[e("h1",X,[r(g,{"enter-active-class":"opacity-100","enter-from":"opacity-0"},{default:i(()=>[Y]),_:1}),Z])]),ee]),r(p,{class:"hidden md:block"})]),_:1})}}};var se=h(te,[["__scopeId","data-v-da9c0230"]]);const oe={},ne={class:"about bg-neutral-100"},ce=e("h1",null,"This is an about page",-1),ae=[ce];function re(n,o){return d(),u("div",ne,ae)}var ie=h(oe,[["render",re]]);const le=$({history:L("/"),routes:[{path:"/",name:"home",component:se},{path:"/folio",name:"portfolio",component:p},{path:"/about",name:"contact",component:ie}]});const x=j(F);x.use(le);x.mount("#app");