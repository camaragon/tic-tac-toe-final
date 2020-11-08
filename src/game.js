class Game {
  constructor() {
    this.player1 = new Player('Democrat', 1, '🔵');
    this.player2 = new Player('Republican', 2, '🔴');
    this.playerTurn = this.player1.name;
    this.moveCount = 0;
    this.gameboard = [
      1, 2, 3,
      4, 5, 6,
      7, 8, 9
    ];
    this.winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  }

  placeToken(tokenIndex) {
    if (this.playerTurn === this.player1.name) {
      this.gameboard.splice(tokenIndex, 1, this.player1.token);
      this.player1.moves.push(tokenIndex);
      this.checkWinOrDraw(this.player1);
      this.playerTurn = this.player2.name;
    }else {
      this.gameboard.splice(tokenIndex, 1, this.player2.token);
      this.player2.moves.push(tokenIndex);
      this.checkWinOrDraw(this.player2);
      this.playerTurn = this.player1.name;
    }
  }

  // checkDraw() {
  //   if (this.moveCount === 9) {
  //     return console.log("It's a draw!");
  //   }
  // }

  playGame(tokenIndex) {
    if (this.gameboard[tokenIndex] != this.player1.token && this.player2.token) {
        this.placeToken(tokenIndex);
        this.moveCount++;
        // this.checkDraw();
    } else {
       return console.log('There is already a token there!');
    }
  }

  checkWinOrDraw(player) {
    // debugger
    for (var i = 0; i < this.winConditions.length; i++) {
      if (player.moves.includes(this.winConditions[i][0]) &&
          player.moves.includes(this.winConditions[i][1]) &&
          player.moves.includes(this.winConditions[i][2])) {
            return console.log(`${player.name} wins!`);
      } else if (this.moves === 9) {
          return console.log("It's a draw!");
      }
    }
  }

    // all indeces are called so no more
}
// for (var j = 0; j < this.movesP1.length; j++) {
//   for (var k = 0; k < this.movesP2.length; k++) {

// winConditions.forEach(function() {
//     if (gameboard[combo[0]] && gameboard[combo[0]] === gameboard[combo[1]]
//         && gameboard[combo[0]] === gameboard[combo[2]])
//         console.log('You won!');
//       });
