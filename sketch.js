var canvas;
var form, player, playerCount;
var database, gameState;
var allPlayers, player1, player2;
var gamers = [];

function preload() {

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  game.getState();

}

function draw() {
  background (0)

  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }


}