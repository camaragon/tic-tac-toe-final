class Player {
  constructor(player, playerNum, token) {
    this.name = player,
    this.id = playerNum,
    this.token = token;
    this.moves = [];
    this.wins = 0;
  }

  saveWinsToStorage() {
    var stringifiedWins = JSON.stringify(this.wins);
    localStorage.setItem(`${this.id} storedPlayerWins`, stringifiedWins);
  }

  retrieveWinsFromStorage() {
    var retrievedWins = localStorage.getItem(`${this.id} storedPlayerWins`);
    parsedWins = JSON.parse(retrievedWins);
  }
}
