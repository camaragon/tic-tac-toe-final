var gameboard = document.querySelector('.gameboard');
var allSlots = Array.from(document.querySelectorAll('.square'));
var alert = document.querySelector('h1');
var player1Wins = document.querySelector('.P1-wins');
var player2Wins = document.querySelector('.P2-wins');
var newGame = new Game();

gameboard.addEventListener('click', clickSlot);
window.addEventListener('load', loadData);

function loadData(player) {
  if(localStorage.length < 2) {
    newGame.player1.saveWinsToStorage();
    newGame.player2.saveWinsToStorage();
    player1Wins.innerText = `WINS: ${newGame.player1.wins}`;
    player2Wins.innerText = `WINS: ${newGame.player2.wins}`;
  }else {
    newGame.player1.retrieveWinsFromStorage();
    newGame.player2.retrieveWinsFromStorage();
    player1Wins.innerText = `WINS: ${newGame.player1.wins}`;
    player2Wins.innerText = `WINS: ${newGame.player2.wins}`;
  }
};

function clickSlot(event) {
  var tokenIndex = allSlots.findIndex(function(targetSlot) {
    return targetSlot === event.target;
  });
  checkSlot(tokenIndex);
};

function checkSlot(tokenIndex) {
  if (allSlots[tokenIndex].innerText != newGame.player1.token &&
    allSlots[tokenIndex].innerText != newGame.player2.token) {
    runGame(tokenIndex);
  }else {
    alert.innerText = 'Already a token!'
  }
};

function runGame(tokenIndex) {
  if (newGame.playerTurn === newGame.player1.id) {
    newGame.playGame(tokenIndex);
    allSlots[tokenIndex].innerText = newGame.player1.token;
    alert.innerText = `${newGame.player2.token}'s Turn!`
    checkWinAndDraw(newGame.player1);
    player1Wins.innerText = `WINS: ${newGame.player1.wins}`;
  }else {
    newGame.playGame(tokenIndex);
    allSlots[tokenIndex].innerText = newGame.player2.token;
    alert.innerText = `${newGame.player1.token}'s Turn!`
    checkWinAndDraw(newGame.player2);
    player2Wins.innerText = `WINS: ${newGame.player2.wins}`;
  }
};

function checkWinAndDraw(player) {
  if (player.win === true) {
    alert.innerText = `${player.name} WINS!`;
    player.saveWinsToStorage();
    endGame();
  }else if (newGame.draw === true) {
    alert.innerText = "It's a TIE!";
    endGame();
  }
};

function endGame() {
  gameboard.classList.toggle('disable-click');
  setTimeout(function() {
    window.location.reload(1);
  }, 3800);
};
