var gameboard = document.querySelector('.gameboard');
var allSlots = Array.from(document.querySelectorAll('.square'));
var alert = document.querySelector('h1');
// var slot = document.querySelector('.square');
var newGame = new Game();

gameboard.addEventListener('click', clickSlot)


function clickSlot(event) {
  var slot = allSlots.findIndex(function(targetSlot) {
    return targetSlot === event.target;
  });
  // alert.innerText = `${newGame.player1.token}'s Turn!`
  checkSlot(slot);
  }


function checkSlot(slot) {
  if (allSlots[slot].innerText != newGame.player1.token && 
    allSlots[slot].innerText != newGame.player2.token) {
    runGame(slot);
  }else {
    return alert.innerText = 'There is already a token there!'
  }
}

  function runGame(slot) {
    if (newGame.playerTurn === newGame.player1.id) {
      newGame.playGame(slot);
      allSlots[slot].innerText = newGame.player1.token;
      newGame.checkWinOrDraw(newGame.player1);
      newGame.playerTurn = newGame.player2.id;
      alert.innerText = `${newGame.player2.token}'s Turn!`
    } else {
      newGame.playGame(slot);
      allSlots[slot].innerText = newGame.player2.token;
      newGame.checkWinOrDraw(newGame.player2)
      newGame.playerTurn = newGame.player1.id;
      alert.innerText = `${newGame.player1.token}'s Turn!`
    }
  }

  function switchPlayers() {

  }
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
