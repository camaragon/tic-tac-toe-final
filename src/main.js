var gameboard = document.querySelector('.gameboard');
var allSlots = Array.from(document.querySelectorAll('.square'));
var slot = document.querySelector('.square');
var newGame = new Game();

gameboard.addEventListener('click', clickSlot)


function clickSlot(event) {
  var slot = allSlots.findIndex(function(targetSlot) {
    return targetSlot === event.target;
  });
  newGame.playGame(slot);
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








// window.addEventListener('load', function() {
//   newGame.retrievedWinsFromStorage();
//
// })
