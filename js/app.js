// declare the variables for dispalying score and highscore
let score = 0;
let highscore = 0;
var count = 0;

// Get the <span> element that closes the modal
// Enemies our player must avoid
var Enemy = function(x, y, fast) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.x = x;
  this.y = y;
  this.fast = fast;
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.



  // checking whether player is collid the enemy
  //if player collid the enemy then x and y axis values are given to display the Playerand score becomes zero
  if (this.x < player.x + 80 &&  this.x + 80 > player.x && this.y < player.y + 60 && 60 + this.y > player.y) {
    player.x = 202;
    player.y = 400;
    score = 0;
  }
  // random function to update enemies randomly
  this.x = this.x + this.fast * dt;
  if (this.x > 500) {
    this.fast = 100 + Math.floor(Math.random() * 100);
    this.x = 0;
  }
}
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  drawScore();
};
// this function is for displaying the score and highscore
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: " + score, 8, 20);
  ctx.fillText("highscore: " + highscore, 100, 20)
}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Hero {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-boy.png';
  }
}
Hero.prototype.update = function(dt) {}

Hero.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
//enemies are created using locations
var buglocation = [60, 140, 220];
buglocation.map((locationY) => {
  var bugitem = new Enemy(0, locationY, 150);
  allEnemies.push(bugitem);
})
//A player is created
var player = new Hero(202, 400);
// when click buttons the following will be executed
Hero.prototype.handleInput = function(key) {
  if (key == 'right') {
    this.x = this.x + 101;
    if (this.x > 404) {
      this.x = 404;
    }
  } else
  if (key == 'left') {
    this.x = this.x - 101;
    if (this.x < 0) {
      this.x = 0;
    }
  } else
  if (key == 'down') {
    this.y = this.y + 82;
    if (this.y > 400) {
      this.y = 400;
    }
  }
  // here player sprite will be changed when count increases
  if (key == 'up') {
    this.y = this.y - 82;
    if (this.y < -10) {
      this.y = 400;
      setTimeout(() => {
        score += 1;
        if (count === 0) {
          this.sprite = 'images/char-cat-girl.png';
        }
        if (count === 1) {
          this.sprite = 'images/char-horn-girl.png';
        }
        if (count === 2) {
          this.sprite = 'images/char-pink-girl.png';
        }
        if (count === 3) {
          this.sprite = 'images/char-princess-girl.png';
          count = 0;
        }
        count++;
      }, 100);
    }
  }
  // checking score and high score if score is greater than highscore we assign score value to highscore
  if (highscore < score) {
    highscore = score;
  }
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
