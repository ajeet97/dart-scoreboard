import uniq from 'lodash/uniq';

function getMultiplier(char) {
  return ['S', 'D', 'T'].indexOf(char) + 1;
}

const SCORES = uniq([
  ...Array(20).fill().map((v, i) => i + 1),
  ...Array(20).fill().map((v, i) => (i + 1) * 2),
  ...Array(20).fill().map((v, i) => (i + 1) * 3),
  25, 50,
]).sort((a, b) => a - b);
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

  static getStr(dart) {
    if (dart === 25) return 'B';
    if (dart === 50) return 'BE';
    if (dart <= 20) return `S${dart}`;
    if (dart % 3 === 0 && dart / 3 <= 20) return `T${dart / 3}`;
    return `D${dart / 2}`;
  }

  static getMinimumDartsToFinish(score) {
    // Greedy approach doesn't work (try for 143)
    // applying brute force for now

    if (SCORES.includes(score)) return [DartController.getStr(score)];

    for (let i = SCORES.length - 1; i >= 0; i -= 1) {
      for (let j = SCORES.length - 1; j >= 0; j -= 1) {
        const sum = SCORES[i] + SCORES[j];
        if (sum === score) {
          return [i, j].map((v) => DartController.getStr(SCORES[v]));
        }
      }
    }

    for (let i = SCORES.length - 1; i >= 0; i -= 1) {
      for (let j = SCORES.length - 1; j >= 0; j -= 1) {
        for (let k = SCORES.length - 1; k >= 0; k -= 1) {
          const sum = SCORES[i] + SCORES[j] + SCORES[k];
          if (sum === score) {
            return [i, j, k].map((v) => DartController.getStr(SCORES[v]));
          }
        }
      }
    }

    // Not possible with at most 3 darts
    return [];
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

  get remaining() {
    return 3 - this.darts.length;
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
