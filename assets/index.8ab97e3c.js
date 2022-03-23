import{c as N,r as b,o as r,a as c,b as e,d as m,w as h,n as x,u as f,p as I,e as $,f as u,g as L,R as E,T as j,h as w,i as A,t as d,F as g,j as y,k as O,l as D,m as B}from"./vendor.636ed9cf.js";const H=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};H();var W="/favicon.ico",V="/dark_mode_black_24dp.svg",R="/light_mode_white_24dp.svg";var k=(s,a)=>{const n=s.__vccOpts||s;for(const[o,t]of a)n[o]=t;return n};const v=s=>(I("data-v-71a52f94"),s=s(),$(),s),P={class:"sticky top-0 z-50 w-full flex justify-center dark:bg-gray-800/70 bg-gray-50/70"},z={class:"flex items-center justify-between text-2xl w-full lg:w-3/4 p-2 lg:px-0"},M={class:"flex items-center underline-offset-8"},q={class:"flex items-center"},F=v(()=>e("img",{class:"w-12 md:w-16 bg-transparent px-3 crisp",src:W,alt:""},null,-1)),U=u("my works"),Z=u("contact"),G=v(()=>e("img",{class:"block dark:hidden",src:V,alt:""},null,-1)),J=v(()=>e("img",{class:"hidden dark:block",src:R,alt:""},null,-1)),K=[G,J],Q={setup(s){var a=!0;document.body.classList.add("dark");function n(p){a=!a,a?document.body.classList.add("dark"):document.body.classList.remove("dark")}const o=L(),t=N(()=>o.path);function i(){window.scrollTo({top:0,behavior:"smooth"})}return(p,C)=>{const _=b("RouterLink");return r(),c("nav",P,[e("div",z,[e("div",M,[m(_,{to:"/",class:"font-bold mr-5",onClick:i},{default:h(()=>[e("div",q,[F,e("h1",{class:x(["font-bold transition-all delay-75 ease-in-out decoration-mandy-700/0",f(t)=="/"?"md:underline decoration-mandy-700/100 decoration-4":""])}," Leiko ",2)])]),_:1}),m(_,{to:"/works",class:x(["hidden md:inline mx-5 transition-all delay-75 ease-in-out decoration-mandy-700/0",f(t)=="/works"?"md:underline decoration-mandy-700/100 decoration-4":""]),onClick:i},{default:h(()=>[U]),_:1},8,["class"]),m(_,{to:"/contact",class:x(["hidden md:inline mx-5 transition-all delay-75 ease-in-out decoration-mandy-700/0",f(t)=="/contact"?"md:underline decoration-mandy-700/100 decoration-4":""]),onClick:i},{default:h(()=>[Z]),_:1},8,["class"])]),e("div",{onClick:C[0]||(C[0]=st=>n()),class:"border-2 rounded-lg p-1 border-mandy-700 m-2 lg:m-0"},K)])])}}};var X=k(Q,[["__scopeId","data-v-71a52f94"]]);const Y={class:"flex flex-col justify-start items-center bg-eyesaver dark:bg-gray-800 min-h-screen text-gray-700 dark:text-gray-50 text-base"},ee={class:"flex flex-col items-center w-3/4"},te=e("h1",{class:"mb-5 dark:text-gray-50 text-gray-700"}," \xA9 2022 Leiko. All Rights Reserved. ",-1),se={setup(s){return(a,n)=>(r(),c("main",Y,[m(X),e("div",ee,[m(f(E),null,{default:h(({Component:o})=>[m(j,{name:"fade"},{default:h(()=>[(r(),w(A(o)))]),_:2},1024)]),_:1}),te])]))}};var ae="/pfp.png",oe="/assets/computer_illustration.a2fd6195.svg";const ne={class:"flex flex-col items-center text-center justify-start mb-20 xl:h-96"},ie=["src"],re={class:"pt-4 text-lg"},le={class:"font-thin"},ce={class:"flex my-2 flex-wrap w-full h-20"},de={methods:{viewItem:function(){this.$router.push({name:"Work",params:{name:this.name,desc:this.desc,text:this.text,date:this.date,skills:this.skills,images:this.images,status:this.status}})}}},me=Object.assign(de,{props:{name:{type:String,required:!0},desc:{type:String,required:!0},text:{type:String},date:{type:String},skills:{type:Array},images:{type:Array},status:{type:String}},setup(s){return(a,n)=>(r(),c("div",ne,[e("img",{class:"inset-0 h-30 object-contain rounded-lg hover:cursor-pointer",onClick:n[0]||(n[0]=o=>a.viewItem()),src:s.images[0],alt:""},null,8,ie),e("h1",re,d(s.name),1),e("h1",le,d(s.desc),1),e("div",ce,[(r(!0),c(g,null,y(s.skills,o=>(r(),c("div",{key:o,class:"text-sm font-normal text-gray-200 px-1.5 bg-gray-600 dark:bg-mandy-600 rounded-lg mx-1 py-0.5 my-1 h-6"},[e("h1",null,d(o),1)]))),128))])]))}}),he={class:"flex flex-col justify-center items-center mt-10 xl:w-1/2 xl:py-10 w-full"},ue={class:"flex justify-start items-center flex-col w-full"},pe=e("h1",{class:"text-4xl xl:pb-5 font-bold text-gray-800 dark:text-gray-50 mb-10 xl:mb-5 underline decoration-mandy-700 decoration-4 underline-offset-8"}," My works ",-1),fe={class:"flex flex-col xl:flex-row xl:justify-between items-center flex-wrap justify-start w-full mt-10"},S={setup(s){var a=[{name:"Stonks",status:"DISCONTINUED",desc:"Hypixel skyblock AH flipping bot",images:["GUI.png","discord_flips.png","flips.png"],text:"This was my main project for almost 2 years, it is a sniping tool for the game Hypixel Skyblock, it's a bot which scans the ingame market 24/7 and notifies you when an item has been put up for sale for too low, which you can then easely buy with the keybinds of the `ingame mod` or from the `discord bot` feed. I started the project alone and in mid 2021, I met Refactor, a friend who helped me with the project and taught me `c++` aswell as `flask`. This project taught me almost everything I know about low level programming, optimisation, algorithms and networks.",date:"2020 - 2022",skills:["py","js","go","c++","rust","java","kotlin"]},{name:"Voxel Game engine",status:"WIP",desc:"A simple 3d voxel game engine made in WindowsForms .NET",images:["voxel.png"],text:"In class we were taught how to draw lines, points and circles in a windows forms .NET application. I had the idea of making a game loop using the Invalidate() method, which allowed me to then make a rendering engine using matrix maths. This turned into a mincraft clone. This project mostly made me more comfortable about using matrices and Trigonometry.",date:"2022 march - ?",skills:[".NET","c#","windows forms"]},{name:"Stairs.io",status:"DONE",desc:"A simple flappy bird like mobile game",images:["stairsio.png","stairsio.jpg"],text:"Stairs.io is my first mobile game, I created it for education purposes and learned c# while making it aswell as Unity.",date:"2020",skills:["unity","c#"]},{name:"Exotic Caf\xE9",status:"WIP",desc:"A discord for Hypixel Skyblock exotic armor collectors",images:["exotic_cafe.png"],text:"Exotic Caf\xE9 is the discord community I created for the game Hypixel Skyblock, it's a community for collectors of some special ingame items. I learned community moderation and management aswell as adobe illustrator while making the different logos. The discord was created with my coop Vincent and two other friends (Rias_dono and Axore). I'm extremely grateful for the amazing moderation team and the admins <3.",date:"2020 - ?",skills:["illustrator","social"]},{name:"NSG",status:"WIP",desc:"NFT sniping bot",images:["nsg.png","nsg_flip.png"],text:"NSG is a discord me and some friends which I made along my NFT/WEB3 journey created. In this discord I made a bot which notifies us when nft collections reveal and tells us which nfts are the cheapest on opensea, to then buy and resell for massive profits. I learned rust along the way. Refactor helped me with some performance issues and brainstorming here. I learned a lot more optimisation along the way.",date:"2022 february - ?",skills:["rust","multithreading"]},{name:"WordBlitz Solver",status:"DONE",desc:"A WordBlitz self playing bot made in python",images:["blitzsolver.png"],text:"When I saw my parents play a little scrabble like mobile game, I had the idea of making a bot which plays the game by itself using the scrabble dictionnary (which i had to store in a specific made data structure for lookup performance). Using tesseract to get the board letters into python and using DFS to find the possible words. PYautoGUI was also used to fake mouse inputs and let python play the game on an Android emulator (NOX). This project taught me python oop, aswell as OCR and pyautogui + it was the early introduction to data structures and algorithmic optimisation for me.",date:"2021 january",skills:["python","tesseract"]},{name:"NDI /w Team Git Poule",status:"DONE",desc:"VueJs Website made during a national all nighter coding challenge",images:["ndi.png"],text:"I participated to the french NDI (nuit de l'info) / Computer science night, we had to make a new website for Breton lifeguards. There were optinnal challenges we could take part in as a team in addition to the main challenge of the night (making the site). We chose to go all in for the dark mode challenge. We made the frontend in VueJs, Backend in PHP and used mySQL as the database for the site. We had to fill in our new site with some of their original site's data, and instead of doing it by hand, I used python to scrap the old website's data and fill up our database.",date:"2021 december",skills:["vuejs","php","python","html","css"]},{name:"STLK",status:"DISCONTINUED",desc:"STLK is a website used to track players in the game Hypixel Skyblock, it aims to help players to trade goods, even with different timezones",images:["stlk_home.png","stlk_list.png"],text:"After creating the Exotic Database, I knew which players had the rare exotic armor pieces I was searching for, but knowing wasn't enough to buy those pieces from them. I needed a way to contact them, and being french, I had a different timezone as most of the players. I ended up creating a first version of a tracker in python, which worked but wasn't easy to use and could only be ran in local. That's why I decided to create STLK. It was a good project to learn figma prototyping on and VueJs aswell. I ended up making several iterations of the design in figma. When I was satisfied with the prototypes and design of the overall page, it was sadly the end of my vacations and with class I didn't have as much time to spend on learning Vue and ended up giving up on the project. I learned a lot through this.",date:"2021",skills:["vuejs","html","css","figma"]},{name:"Exotic twitter bot",status:"DONE",desc:"A twitter bot which notifies you when an exotic armor piece is up for sale",images:["exotic_bot.png"],text:"At the beginning of the exotic armor hunt era, players didn't have any ways of tracking the rare armor pieces, some where put up for sale on the ingame auction house amongst the normal pieces. I had the idea of making a twitter bot which we would follow to get notifications and be able to get the pieces off the auction house quickly after they were put up for sale. I learned to work with twitter bot api in python aswell as python requests and the json format here too.",date:"2020 december",skills:["python","twitter api"]},{name:"Lowatem AlphaZero AI",status:"SCHOOL PROJECT",desc:"TODO",images:["lowatem.png"],text:"TODO",date:"2021",skills:["java"]},{name:"Nike scrapping bot",status:"DONE",desc:"A twitter notification bot for nike.com",images:["nike_sniper.png"],text:"When I missed the occasion to buy a pair of sneakers I wanted, I decided to make a bot that would send me a notification on my phone when this exact pair would come back for sale on nike's official website. I reused my twitter bot code from the Exotic twitter bot, and learned how to scrap a website using beautiful soup, and with some python code I made a working twitter bot to notify me when my favorite sneakers pair would come back for sale (spoiler, I wear them everyday).",date:"2020",skills:["python","beatifulsoup4","twitter api"]},{name:"Exotic Database",status:"DONE",desc:"The first Hypixel Skyblock public exotic armor database",images:["exotic_db.png"],text:"Using data from the Hypixel Public API (REST), I used BFS to traverse player friendlists and build up a list of Player uuids, which I then scanned with python to build up a mongo database, to store all of the found exotic armor pieces in the game which were scattered trough millions of player inventories. This Database was then released the 10 000 members of the Exotic Caf\xE9 discord, with a guide to search items inside of it. Through this project I learned to use python requests aswell as the json format for REST apis and pymongo wrapper.",date:"2020 | Special thx to Leaphant and RyanHCode",skills:["python","mongodb"]}];return(n,o)=>(r(),c("div",he,[e("div",ue,[pe,e("div",fe,[(r(!0),c(g,null,y(f(a),t=>(r(),w(me,{key:t.date,name:t.name,status:t.status,desc:t.desc,images:t.images,text:t.text,date:t.date,skills:t.skills,class:"lg:p-2 lg:w-1/2"},null,8,["name","status","desc","images","text","date","skills"]))),128))])])]))}};const l=s=>(I("data-v-34be026a"),s=s(),$(),s),ge={class:"flex flex-col xl:flex-row justify-start xl:justify-between items-center w-full xl:min-h-screen"},ye=l(()=>e("div",{class:"w-1/2 xl:hidden m-10"},[e("img",{class:"rounded-full",src:ae,alt:""})],-1)),we={class:"flex justify-start items-center xl:basis-1/2 w-full"},_e={class:"flex flex-col xl:p-5"},xe=l(()=>e("span",{class:"text-2xl xl:text-9xl xl:pb-5 font-bold transition-all delay-75 ease-in-out"},[u("Hi,"),e("br",{class:"hidden xl:block"}),u(" I'm "),e("span",{class:"text-mandy-700 font-bold"},"L\xE9o"),u(".")],-1)),be=l(()=>e("span",{class:"text:lg xl:text-6xl no-underline font-thin"},"backend developper",-1)),ke=l(()=>e("img",{class:"hidden xl:block basis-1/2 w-96",src:oe,alt:""},null,-1)),ve=l(()=>e("div",{class:"w-full xl:w-1/2 xl:py-10 pt-0 !mt-5"},[e("span",{class:"underline text-lg font-bold underline-offset-4 decoration-4 py-2 inline-block decoration-gray-500"},"Bio"),e("br"),e("h1",{class:"indent-5 text-justify leading-snug font-thin tracking-tight"}," I'm a french developper based in Bordeaux. I started algorithms at 8 and started coding at 10 years old, but stopped to play games a year or two after. I've been learning science since then, but in 2017-2018 I started coding again, and this time I had projects. ")],-1)),Ce={class:"w-full xl:w-1/2 xl:py-10 pt-0 !mt-5"},Ie=l(()=>e("span",{class:"underline text-lg font-bold underline-offset-4 decoration-4 py-2 inline-block decoration-gray-500"},"Socials",-1)),$e={class:"text-mandy-400 dark:text-mandy-300 fill-mandy-400 dark:fill-mandy-300"},je={class:""},Se=l(()=>e("li",{class:"p-2 px-4 rounded-lg hover:bg-mandy-300/30 w-fit active:bg-mandy-300/30 flex items-center font-bold transition-all duration-300 my-1"},[e("a",{href:"https://twitter.com/Leik0w0"},[e("svg",{class:"inline-block mr-2",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("path",{d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"})]),e("p",{class:"inline-block"},"@Leik0w0")])],-1)),Te={class:"p-2 px-4 rounded-lg hover:bg-mandy-300/30 w-fit active:bg-mandy-300/30 flex items-center font-bold transition-all duration-300 my-1"},Ne=l(()=>e("svg",{class:"inline-block mr-2",viewBox:"0 0 71 55",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"})],-1)),Le=l(()=>e("p",{class:"inline-block group-active:hidden"},"Leiko#9999",-1)),Ee=l(()=>e("p",{class:"hidden group-active:inline-block"}," Copied to clipboard ! ",-1)),Ae=[Ne,Le,Ee],Oe=l(()=>e("li",{class:"p-2 px-4 rounded-lg hover:bg-mandy-300/30 w-fit active:bg-mandy-300/30 flex items-center font-bold transition-all duration-300 my-1"},[e("a",{href:"https://discord.gg/dye"},[e("svg",{class:"inline-block mr-2",viewBox:"0 0 71 55",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"})]),e("p",{class:"inline-block"},"Exotic Caf\xE9")])],-1)),De=l(()=>e("li",{class:"p-2 px-4 rounded-lg hover:bg-mandy-300/30 w-fit active:bg-mandy-300/30 flex items-center font-bold transition-all duration-300 my-1"},[e("a",{href:"https://github.com/Leikoe"},[e("svg",{class:"inline-block mr-2",viewBox:"0 0 512 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"})]),e("p",{class:"inline-block"},"@Leikoe")])],-1)),Be=l(()=>e("li",{class:"p-2 px-4 rounded-lg hover:bg-mandy-300/30 w-fit active:bg-mandy-300/30 flex items-center font-bold transition-all duration-300 my-1"},[e("a",{href:"https://github.com/Leikoe"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"inline-block mr-2",height:"1em",width:"1em",viewBox:"0 0 24 24"},[e("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e("path",{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"})]),e("p",{class:"inline-block"},"leo.paille@etu.u-bordeaux.fr")])],-1)),He={setup(s){function a(n){clipboard.writeText(n)}return(n,o)=>{const t=b("content");return r(),w(t,{class:"flex flex-col justify-start xl:justify-between xl:py-10 space-y-20 xl:space-y-30 pt-0 items-center font-mono"},{default:h(()=>[e("div",ge,[ye,e("div",we,[e("h1",_e,[m(j,{"enter-active-class":"opacity-100","enter-from":"opacity-0"},{default:h(()=>[xe]),_:1}),be])]),ke]),ve,e("div",Ce,[Ie,e("div",$e,[e("ul",je,[Se,e("li",Te,[e("a",{onClick:o[0]||(o[0]=i=>a("Leiko#9999")),class:"group"},Ae)]),Oe,De,Be])])]),m(S)]),_:1})}}};var We=k(He,[["__scopeId","data-v-34be026a"]]);const Ve={},Re={class:"about bg-neutral-100"},Pe=e("h1",null,"This is an about page",-1),ze=[Pe];function Me(s,a){return r(),c("div",Re,ze)}var qe=k(Ve,[["render",Me]]);const Fe={class:"xl:w-1/2 m-5"},Ue=u(" > "),Ze={class:"inline-block font-bold px-1 text-xl"},Ge={class:"bg-mandy-300 inline-block px-1 rounded-lg text-xs mx-1"},Je={class:"flex flex-wrap w-full mb-5"},Ke={class:"text-justify text-xl my-5"},Qe={class:"indent-5 text-justify"},Xe={class:"flex flex-col items-center my-5 space-y-5"},Ye=["src"],et={props:{name:{type:String,required:!0},desc:{type:String,required:!0},text:{type:String},date:{type:String},skills:{type:Array},images:{type:Array},status:{type:String}},setup(s){return(a,n)=>{const o=b("content");return r(),w(o,{class:"flex flex-col w-full items-center text-lg"},{default:h(()=>[e("div",Fe,[e("a",{onClick:n[0]||(n[0]=t=>a.$router.back()),class:"text-mandy-300 inline-block pr-1 cursor-pointer hover:underline underline-offset-4 text-lg"},"Works"),Ue,e("h1",Ze,d(s.name),1),e("h1",Ge,d(s.date),1),e("div",Je,[(r(!0),c(g,null,y(s.skills,t=>(r(),c("div",{key:t,class:"text-xs font-normal text-gray-200 dark:text-gray-700 px-1.5 bg-gray-600 dark:bg-gray-200 rounded-lg mx-1 py-0.5 my-1"},[e("h1",null,d(t),1)]))),128))]),e("p",Ke,d(s.desc),1),e("p",Qe,d(s.text),1),e("div",Xe,[(r(!0),c(g,null,y(s.images,t=>(r(),c("img",{key:t,src:"/"+t,alt:"",class:"inset-0 w-full object-cover rounded-lg hover:cursor-pointer"},null,8,Ye))),128))])])]),_:1})}}},tt=O({history:D("/"),scrollBehavior(s,a,n){return new Promise((o,t)=>{setTimeout(()=>{o({top:0,behavior:"smooth"})},500)})},routes:[{path:"/",name:"Home",component:We},{path:"/works",name:"Works",component:S},{path:"/contact",name:"Contact",component:qe},{path:"/work/:name",name:"Work",component:et,props:!0}]});const T=B(se);T.use(tt);T.mount("#app");