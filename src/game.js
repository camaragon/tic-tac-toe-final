class Game {
  constructor() {
    this.player1 = new Player('Democrat', 1, '🔵');
    this.player2 = new Player('Republican', 2, '🔴');
    this.playerTurn = this.player1.name;
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
    }else {
      this.gameboard.splice(tokenIndex, 1, this.player2.token);
      this.playerTurn = this.player1.name;
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
    // to win game must have 3 tokens in a row
    // must compare token indeces to index of win conditions
  }
}
