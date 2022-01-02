import DartController from './DartController';

class PlayerController {
  static UNRANKED = 999;

  constructor(opts) {
    this.curr = 0;
    this.total = opts.total;
    this.names = opts.names;
    this.currRoundScores = Array(this.total).fill(0);
    this.remainingScores = Array(this.total).fill(opts.initialScore);
    this.bestRounds = Array(this.total).fill().map(() => []);
    this.lastRounds = Array(this.total).fill().map(() => []);
    this.lastRoundFouls = Array(this.total).fill(false);
    this.ranks = Array(this.total).fill(PlayerController.UNRANKED);

    this._rank = 1;
  }

  get state() {
    return {
      curr: this.curr,
      currRoundScore: this.currRoundScores[this.curr],
      remainingScore: this.remainingScores[this.curr],
      bestRound: [...this.bestRounds[this.curr]],
      lastRound: [...this.lastRounds[this.curr]],
      lastRoundFouls: this.lastRoundFouls[this.curr],
      rank: this.ranks[this.curr],
      _rank: this._rank,
    };
  }

  get currName() {
    return this.names[this.curr] || `Player${this.curr + 1}`;
  }

  get ranked() {
    return this.ranks[this.curr] !== PlayerController.UNRANKED;
  }

  get gameover() {
    const unranked = this
      .ranks
      .filter((rank) => rank === PlayerController.UNRANKED)
      .length;
    console.log('unranked:', unranked);
    return unranked <= 1;
  }

  get remaining() {
    return this.remainingScores[this.curr] - this.currRoundScores[this.curr];
  }

  get scores() {
    return this.remainingScores.map((remaining, i) => remaining - this.currRoundScores[i]);
  }

  next() {
    // To prevent infinite loop (this shouldn't happen but just in case)
    let c = 0;
    do {
      this.curr = (this.curr + 1) % this.total;
      c += 1;
    } while (this.ranked && c < this.total);
  }

  // Returns true, if the shot was a foul
  updateScore(score, isLastShot) {
    this.currRoundScores[this.curr] += score;

    const curr = this.currRoundScores[this.curr];
    const rem = this.remainingScores[this.curr] - curr;

    // If foul shot, reset current round score
    if (rem < 0) {
      this.currRoundScores[this.curr] = 0;
      return true;
    }

    // If round/score complete, update total score and reset current round score
    if (isLastShot || rem === 0) {
      this.remainingScores[this.curr] = rem;
      this.currRoundScores[this.curr] = 0;
    }

    // If score complete, assign rank
    if (rem === 0) {
      this.ranks[this.curr] = this._rank;
      this._rank += 1;
    }

    return false;
  }

  updateLastRound(state) {
    this.lastRounds[this.curr] = state.darts;
    this.lastRoundFouls[this.curr] = state.isFoul;
    if (!state.isFoul) this.updateBestRound(state.darts);
  }

  updateBestRound(darts) {
    const prevBest = DartController.sumScore(this.bestRounds[this.curr]);
    const curr = DartController.sumScore(darts);
    if (curr >= prevBest) {
      this.bestRounds[this.curr] = darts;
    }
  }

  restoreState(state) {
    this.curr = state.curr;
    this.currRoundScores[this.curr] = state.currRoundScore;
    this.remainingScores[this.curr] = state.remainingScore;
    this.bestRounds[this.curr] = state.bestRound;
    this.lastRounds[this.curr] = state.lastRound;
    this.lastRoundFouls[this.curr] = state.lastRoundFouls;
    this.ranks[this.curr] = state.rank;
    this._rank = state._rank;
  }
}

export default PlayerController;
