---
title: 'When Minecraft teaches you how to code - Stonks'
date: '2022-04-16T05:35:07.322Z'
authors: 'Léo Paillé'
featured: false
tags: 'py,js,go,c++,rust,java,kotlin'
hidden: false
---

# Stonks: A Sniping Tool for Hypixel Skyblock

## Abstract

In the online gaming community, there is a growing interest in tools that can help players acquire in-game items at a lower price than they would otherwise be able to. One such game is Hypixel Skyblock, a massively multiplayer role-playing game with a large and active player base. In this paper, we present Stonks, a sniping tool for Hypixel Skyblock that scans the ingame market 24/7 and notifies users when an item has been put up for sale at a price below a certain threshold. This allows users to easily purchase items at a lower price than they would otherwise be able to.

## Introduction

Hypixel Skyblock is a popular massively multiplayer role-playing game that has a large and active player base. One of the key features of the game is its in-game market, where players can buy and sell items to each other. However, the market can be highly competitive, with items often selling for higher prices than players are willing to pay.

To address this problem, I have developed Stonks, a sniping tool for Hypixel Skyblock that scans the ingame market 24/7 and notifies users when an item has been put up for sale at a price below a certain threshold. This allows users to easily purchase items at a lower price than they would otherwise be able to.

## Methodology

Stonks was initially written in Python but was found to be too slow for the task at hand. I then learned Golang and rewrote the bot in that language, but it still did not meet the performance requirements. I then turned to C++ and was able to achieve the desired level of performance but found the language to be overly complicated for the task at hand. Ultimately, I learned the Rust programming language and rewrote the bot again, resulting in a performant and maintainable solution.

The project used public API provided by Hypixel Skyblock that allows getting all active auctions, and the endpoint's data refreshes each minute. One of the main challenges faced while working on Stonks was ensuring that the bot was able to handle a large amount of data efficiently. To solve this, several optimization techniques such as caching and multithreading were implemented. Another challenge was dealing with the rate limits imposed by the API. A rate limiter was implemented and the bot was designed to make the most efficient use of the available data.

Stonks also includes a Discord bot that allows users to view and purchase items directly from the Discord feed. This was implemented using the Discord API and Flask.

## Results

The results of using Stonks have been positive. It has helped users to acquire items at a lower price than they would otherwise be able to. The bot has been able to handle large amounts of data efficiently and has been able to bypass rate limits imposed by the API. The Discord bot integration has also been well received by users.

## Conclusion

Stonks is a sniping tool for Hypixel Skyblock that has proven to be effective in helping users acquire items at a lower price than they would otherwise be able to. The journey of developing the bot taught me a lot about the importance of choosing the right programming language for the task and how to optimize the performance of the software. The Discord bot integration has also been well received by users. The project has taught me a lot about low-level programming, optimization, algorithms, and networks.

## Future Work

In the future, we plan to continue to develop Stonks and add new features.
