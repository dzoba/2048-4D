function ScoreData() {
  this.moves = 0;
  this.startTime = Date.now();
  this.scoreObj = {};
}

ScoreData.prototype.incrementMove = function () {
  this.moves++;
};

ScoreData.prototype.recordScore = function () {
  var scores = Vault.Local.get("scores") || [];
  scores.push(this.scoreObj);
  Vault.Local.set("scores", scores);
};

ScoreData.prototype.newNum = function (newValue) {
  this.scoreObj[newValue] = {"moves": this.moves};
  this.scoreObj[newValue] = {"time": (Date.now() - this.startTime) / 1000};
  $('.time-to-tile').append("<li class='tile-time'>" + newValue + " - <strong>" + (Date.now() - this.startTime) / 1000 + "</strong></li>");
  $('.moves-made').append("<li class='tile-moves'>" + newValue + " - <strong>" + this.moves + "</strong></li>");
};
