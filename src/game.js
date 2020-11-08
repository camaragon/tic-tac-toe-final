class Game {
  constructor() {
    this.player1 = new Player('Democrat', 1, '🔵');
    this.player2 = new Player('Republican', 2, '🔴');
    this.playerTurn = this.player1.name;
    this.movesP1 = [];
    this.movesP2 = [];
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
      this.playerTurn = this.player2.name;
      this.movesP1.push(tokenIndex);
    }else {
      this.gameboard.splice(tokenIndex, 1, this.player2.token);
      this.playerTurn = this.player1.name;
      this.movesP2.push(tokenIndex);
    }
  }

  playGame(tokenIndex) {
    if (this.gameboard[tokenIndex] != this.player1.token && this.player2.token) {
        this.placeToken(tokenIndex);
    } else {
      console.log('There is already a token there!');
    }
  }

  declareWinner() {
    for (var i = 0; i < this.winConditions.length; i++) {
      if (this.movesP1.includes(this.winConditions[i][0] &&
          this.winConditions[i][1] && this.winConditions[i][2])) {
            console.log('Player 1 wins');
      }else if(this.movesP2.includes(this.winConditions[i][0] &&
          this.winConditions[i][1] && this.winConditions[i][2])) {
            console.log('Player 2 wins');
      }
    }
  }
}
// for (var j = 0; j < this.movesP1.length; j++) {
//   for (var k = 0; k < this.movesP2.length; k++) {

// winConditions.forEach(function(combo, index) {
  //   if (gameboard[combo[0]] && gameboard[combo[0]] === gameboard[combo[1]]
    //     && gameboard[combo[0]] === gameboard[combo[2]])
    //     console.log('You won!');
    //   });
