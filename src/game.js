class Game {
  constructor() {
    this.player1 = new Player('Democrat', 'Player 1', '🔵');
    this.player2 = new Player('Republican', 'Player 2', '🔴');
    this.playerTurn = this.player1.id;
    this.moveCount = 0;
    this.draw = false;
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
    if (this.playerTurn === this.player1.id) {
      this.gameboard.splice(tokenIndex, 1, this.player1.token);
      this.player1.moves.push(tokenIndex);
      this.checkWinOrDraw(this.player1);
      this.playerTurn = this.player2.id;
    }else {
      this.gameboard.splice(tokenIndex, 1, this.player2.token);
      this.player2.moves.push(tokenIndex);
      this.checkWinOrDraw(this.player2);
      this.playerTurn = this.player1.id;
    }
  }

  resetGame() {
    this.player1.moves.length = 0;
    this.player2.moves.length = 0;
    this.gameboard.length = 0;
    this.moveCount = 0;
    this.draw = 0;
    this.win = 0;
    this.playerTurn = this.player1.id;
    for (var i = 1; i < 10; i++) {
       this.gameboard.push(i);
       console.log('The game is reset!')
     }
  }

  playGame(tokenIndex) {
    if (this.gameboard[tokenIndex] != this.player1.token &&
      this.gameboard[tokenIndex] != this.player2.token) {
        this.moveCount++;
        this.placeToken(tokenIndex);
    } else {
       return console.log('There is already a token there!');
    }
  }

  checkDraw() {
    if (this.moveCount === 9) {
      this.draw = true;
    }
  }

  checkWinOrDraw(player) {
    // debugger
    for (var i = 0; i < this.winConditions.length; i++) {
      if (player.moves.includes(this.winConditions[i][0]) &&
      player.moves.includes(this.winConditions[i][1]) &&
      player.moves.includes(this.winConditions[i][2])) {
        player.wins++;
        player.win = true;
      }
    }
    if (player.win === false) {
      this.checkDraw();
    }
  }
}
// return alert.innerText = `${player.name} wins!`;
// return console.log(`${player.name} wins!`);
// return setTimeout(this.resetGame(), 10000);
// return this.draw = true;
// return setTimeout(this.resetGame(), 10000);
