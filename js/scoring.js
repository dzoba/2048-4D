function Score() {
  this.moves = 0;
  this.startTime = Date.now();

}

Score.prototype.incrementMove = function() {
  this.moves++;
  console.log(moves);
}
