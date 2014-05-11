function ScoreData() {
  this.moves = 0;
  this.startTime = Date.now();

}

ScoreData.prototype.incrementMove = function() {
  this.moves++;
  console.log(moves);
}
