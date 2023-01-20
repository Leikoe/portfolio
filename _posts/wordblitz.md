---
title: 'Destroying scrabble players with Tesseract - Wordblitz Solver'
date: '2018-08-08T05:35:07.322Z'
authors: 'Léo Paillé'
featured: false
tags: 'python,tesseract'
hidden: false
---

# Building a Scrabble Bot with Python

As a young programmer, I was always looking for new projects to work on. One day, while watching my parents play a mobile Scrabble-like game, I had an idea: What if I could create a bot that could play the game by itself?

I knew that this would be a challenging project, but I was excited to take it on. The first step was to find a way to get the letters on the Scrabble board into my Python script. I decided to use the Tesseract OCR library, which is an open-source tool that can recognize text in images.

Once I had the letters on the board, I needed to find a way to generate all possible words that could be formed with those letters. To do this, I used a depth-first search (DFS) algorithm, which is a technique for traversing a tree or graph data structure. By using DFS for every position in the board, my bot was able to find all possible words that could be formed with the letters on the board.

To make the bot play the game on an Android emulator (NOX), I used the PyAutoGUI library, which allows you to simulate mouse and keyboard inputs. This way, my bot was able to click on the letters on the board and form words just like a human player would.

One of the key things I learned while working on this project was how to optimize my code for performance. I had to store the Scrabble dictionary in a data structure that allowed for fast lookups, and I had to come up with algorithms that could generate words quickly. This was my early introduction to data structures and algorithmic optimization, and it was a valuable learning experience.

Overall, this project was a great opportunity for me to learn about Python OOP, OCR, and PyAutoGUI. It also taught me the importance of data structures and algorithmic optimization, which are crucial skills for any programmer.
