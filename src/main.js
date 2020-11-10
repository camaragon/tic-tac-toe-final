var gameboard = document.querySelector('.gameboard');
var allSlots = Array.from(document.querySelectorAll('.square'));
var alert = document.querySelector('h1');
var player1Wins = document.querySelector('.P1-wins');
var player2Wins = document.querySelector('.P2-wins');
var newGame = new Game();

gameboard.addEventListener('click', clickSlot);
window.addEventListener('load', loadData);

function loadData(player) {
  newGame.player1.retrieveWinsFromStorage();
  newGame.player2.retrieveWinsFromStorage();
  player1Wins.innerText = `${newGame.player1.wins} Win's`;
  player2Wins.innerText = `${newGame.player2.wins} Win's`;
}

function clickSlot(event) {
  var tokenIndex = allSlots.findIndex(function(targetSlot) {
    return targetSlot === event.target;
  });
  // alert.innerText = `${newGame.player1.token}'s Turn!`
  checkSlot(tokenIndex);
  }


function checkSlot(tokenIndex) {
  if (allSlots[tokenIndex].innerText != newGame.player1.token &&
    allSlots[tokenIndex].innerText != newGame.player2.token) {
    runGame(tokenIndex);
  }else {
    return alert.innerText = 'There is already a token there!'
  }
}

  function runGame(tokenIndex) {
    // debugger
    if (newGame.playerTurn === newGame.player1.id) {
      newGame.playGame(tokenIndex);
      allSlots[tokenIndex].innerText = newGame.player1.token;
      alert.innerText = `${newGame.player2.token}'s Turn!`
      checkWin(newGame.player1);
      player1Wins.innerText = `${newGame.player1.wins} Win's`;
    } else {
      newGame.playGame(tokenIndex);
      allSlots[tokenIndex].innerText = newGame.player2.token;
      alert.innerText = `${newGame.player1.token}'s Turn!`
      checkWin(newGame.player2);
      player2Wins.innerText = `${newGame.player2.wins} Win's`;
    }
  }

function checkWin(player) {
  if (player.win === true) {
    alert.innerText = `${player.name} wins!`;
    player.saveWinsToStorage();
    makeTimeout();
  }else if (newGame.draw === true) {
    alert.innerText = "It's a tie!";
    makeTimeout();
  }
};

function makeTimeout() {
  gameboard.disabled = true;
  setTimeout(function() {
    window.location.reload(1);
  }, 5000);
}
