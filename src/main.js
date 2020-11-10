var gameboard = document.querySelector('.gameboard');
var allSlots = Array.from(document.querySelectorAll('.square'));
var alert = document.querySelector('h1');

var newGame = new Game();

gameboard.addEventListener('click', clickSlot)


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
    } else {
      newGame.playGame(tokenIndex);
      allSlots[tokenIndex].innerText = newGame.player2.token;
      alert.innerText = `${newGame.player1.token}'s Turn!`
      checkWin(newGame.player2);
    }
  }

function checkWin(player) {
  debugger
  if (player.win === true) {
    alert.innerText = `${player.name} wins!`;
  }else if (newGame.draw === true) {
    alert.innerText = "It's a tie!";
  }
};
  // }
  // var targetSlot = event.target;
  // console.log(targetSlot);
  // console.log(allSlots);
  // }

    // var targetSpot = event.target;
    // allSlots.findIndex(targetSpot);

// function playGameDOM() {
//
//
//   have a node list of all 9 indeces and there respective values
//   iterate through the nodeList and use innerText to add token
//   for (var i = 0; i < gameboard.length; i++) {
//     if (newGame.)
//     event.target
//     newGame.playGame(gameboard[i])
//     gameboard[i].innerText = newGame.
//   }
// }
