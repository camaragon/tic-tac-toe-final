class Game {
  constructor(player1, player2) {
    this.players = [player1, player2];
    this.gameboard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.playerTurn = player1;
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


}
