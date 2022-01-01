function getMultiplier(char) {
  return ['S', 'D', 'T'].indexOf(char) + 1;
}

class DartController {
  constructor(opts) {
    this.darts = [];
    this.isFoul = false;

    this.swd = opts.swd;
    this.ewd = opts.ewd;
    this.enableDoublesRule = opts.enableDoublesRule;
  }

  static calcScore(dart) {
    if (dart === '✗') return 0;
    if (dart === 'B') return 25;
    if (dart === 'BE') return 50;

    return getMultiplier(dart[0]) * dart.slice(1);
  }

  static sumScore(darts) {
    return darts.reduce((agg, dart) => agg + this.calcScore(dart), 0);
  }

  get state() {
    return {
      darts: [...this.darts],
      isFoul: this.isFoul,
    };
  }

  get isLastShot() {
    return this.darts.length === 3;
  }

  reset() {
    this.darts = [];
    this.isFoul = false;
  }

  throw(dart) {
    this.darts.push(dart);
    const score = DartController.calcScore(dart);
    return score;
  }

  foul(isFoul) {
    this.isFoul = isFoul;
  }

  restoreState(state) {
    this.darts = state.darts;
    this.isFoul = state.isFoul;
  }
}

export default DartController;
