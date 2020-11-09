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
    localStorage.setItem(`${this.id} storedWins`, stringifiedWins);
  }

  retrieveWinsFromStorage() {
    var retrievedWins = localStorage.getItem(`${this.id} storedWins`);
    this.wins = JSON.parse(retrievedWins);
  }
}
