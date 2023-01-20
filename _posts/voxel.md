---
title: 'Voxels by hand in Windows Forms'
date: '2022-03-12T05:35:07.322Z'
authors: 'Léo Paillé'
featured: false
tags: '.NET",c#,windows forms'
hidden: false
---

# Using WindowsForms .NET to Create a 3D Voxel Game Engine

In a recent class, we were taught the basics of creating user interfaces using Windows Forms .NET. However, I had an idea to take it a step further and use the framework to create a simple 3D game engine. While Windows Forms .NET is not typically used for this purpose, I discovered that it was possible to use it in this way by utilizing the `Invalidate()` method and incorporating matrix math and trigonometry.

I began by creating a game loop that would run at a set framerate and used the `Invalidate()` method to redraw the screen each frame. This allowed me to create a simple animation of a moving cube on the screen. I then added 3D transformations such as translation, rotation, and scaling using matrix math, and used trigonometry to calculate the angles for the rotations.

To create the voxel world, I represented each cube as 12 triangles. However, to optimize the rendering process, I used techniques such as **culling** and **block fusion**. Culling is the process of removing triangles that are not visible from the current view, and block fusion is the process of combining adjacent cubes that have the same properties, reducing the number of triangles that need to be rendered. This not only improved the performance of the game engine but also allowed for a more efficient use of resources.

Overall, this project was a great learning experience for me as it allowed me to explore the capabilities of Windows Forms .NET and to learn more about 3D graphics programming and optimization techniques. I had a lot of fun building my own simple game engine and creating a small Minecraft clone.
