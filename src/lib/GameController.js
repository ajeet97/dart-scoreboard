import DartController from './DartController';
import PlayerController from './PlayerController';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

class GameController {
  constructor(opts) {
    this.dartController = new DartController({
      swd: opts.swd,
      ewd: opts.ewd,
      enableDoublesRule: opts.enableDoublesRule,
    });

    this.playerController = new PlayerController({
      total: opts.totalPlayers,
      names: opts.playerNames,
      initialScore: opts.initialScore,
    });

    this.history = [];
    this.gameover = false;

    this._canThrow = true;
  }

  get currentPlayer() {
    return this.playerController.curr;
  }

  get currentPlayerName() {
    return this.playerController.currName;
  }

  get EOR() {
    return (
      this.playerController.ranked
      || this.dartController.isFoul
      || this.dartController.isLastShot
    );
  }

  get closestDarts() {
    const score = this.playerController.remaining;
    if (score > 180) return '';

    const darts = DartController.getMinimumDartsToFinish(score);
    if (darts.length > this.dartController.remaining) return '';

    return darts.join(', ');
  }

  async throwDart(dart) {
    if (!this._canThrow) return;

    this._canThrow = false;
    this.updateHistory();

    const score = this.dartController.throw(dart);
    const isFoul = this.playerController.updateScore(score, this.dartController.isLastShot);
    this.dartController.foul(isFoul);

    if (this.EOR) await this.handleEndOfRound();
    this._canThrow = true;
  }

  async handleEndOfRound() {
    await sleep(300);
    this.playerController.updateLastRound(this.dartController.state);
    this.playerController.next();
    this.dartController.reset();

    this.gameover = this.playerController.gameover;
  }

  updateHistory() {
    const state = {
      dart: this.dartController.state,
      player: this.playerController.state,
    };
    this.history.push(state);
  }

  undo() {
    const state = this.history.pop();
    if (!state) return;

    this.dartController.restoreState(state.dart);
    this.playerController.restoreState(state.player);
    this.gameover = this.playerController.gameover;
  }
}

export default GameController;
