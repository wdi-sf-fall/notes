"use strict"

var ernie = {
  name: "Ernie",
  marker: "X",
  tiles:[]
};

var bert = { 
  name: "Bert",
  marker: "O",
  tiles:[]
};

var players = [ernie, bert];
var currentPlayer = {};

var moves = 0;
var tiles = document.getElementsByClassName('box');
var win_combos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],
[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

var marker = function() {
  return currentPlayer.marker;
};

// returns true if a2 is a sub set of a1, otherwise false
var contains = function(a1, a2){
  var contains = false;
  var counter = 0;
  for (var i = a1.length - 1; i >= 0; i--) {
    for (var j = a2.length - 1; j >= 0; j--) {
      if (a2[j] === a1[i]){
        counter = counter+1;
      }
    };
    if (counter === a2.length){
      contains = true;
      break;
    }
  };
  return contains;
}

var isWin = function(tile){
  var tileID = tile.id.slice(-1);
  currentPlayer.tiles.push(parseInt(tileID));
  var isWin = false;
  for (var i = win_combos.length - 1; i >= 0; i--) {
    isWin = contains(currentPlayer.tiles, win_combos[i])
    if(isWin){
      break;
    }
  };
  return isWin;
}

var isTie = function(){
  return (moves === 9);
}

var clickHandler = function(){
  // determine current player
  currentPlayer = players[moves % 2];
  // set marker, keep count of moves
  if (!this.innerHTML) {
    this.innerHTML= marker() ;
    this.classList.add(marker());
    moves++;
  }
  // check for win
  if(isWin(this)){
    alert(currentPlayer.name + " wins!");
    newGame();
  } else if (isTie()){
    // or tie
    alert("It's a tie!!!!");
    newGame();
  }
};

var newGame = function () {
  // for(var i=0; i<tiles.length; i++) {
  //   tiles[i].innerHTML="";
  //   tiles[i].className="";
  // }
  // players[0].tiles = [];
  // players[1].tiles = [];
  // moves = 0;
  // currentPlayer = {};
  window.location.href = window.location.href
};

var registerHandlers = function() {
  for (var i=0;i<tiles.length; i++) {
      tiles[i].onclick = clickHandler;
  }
};

var initialize = function(){
  registerHandlers();
}

window.onload = initialize;
