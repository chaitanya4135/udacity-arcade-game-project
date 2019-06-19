# Classic Arcade Game Clone Project

## Table of Contents

- [Instructions](#instructions)
- [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
-----------



# Arcade Game

## Goals/Winning
In this game the goal is simple, get the hero character to move across the gray bricks towards the water without getting hit by the enemy bugs. The user's score increases by one point for each level passed and decrease to zero if collide with enemies. The number of enemy bugs are three.
when the player reaches the other end each time a new player will come.

### Movement and Controls
Users move the hero character by using the main up/right/left/down arrow keys on their keyboard.

#### Installation
To run the application:

1. Download the GitHub zip file or clone the repository onto your local workstation:
2. Open a browser window and navigate to the index.html file in your application's directory.

##### Tools / Techniques
- Object-Oriented JavaScript
- constructor functions to create multiple Enemy instances
- prototypal inheritance
- HTML5 Canvas API
- resource loading via immediately-invoked function expressions (IIFE)
