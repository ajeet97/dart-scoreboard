<template>
  <game-over v-if="gameover"/>
  <div class="container" v-else>
    <div style="display: flex; column-gap: 10px">
      <div class="current-player">{{ playerName }}</div>
      <div class="closest-darts" v-if="closestDarts">{{closestDarts}}</div>
    </div>
    <div :class="{undo: true, disabled: disableUndo}" @click="undo">UNDO</div>
    <current-round />
    <score-board />
    <score-input />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import GameOver from '../components/GameOver.vue';
import CurrentRound from '../components/CurrentRound.vue';
import ScoreBoard from '../components/ScoreBoard.vue';
import ScoreInput from '../components/ScoreInput.vue';

export default {
  name: 'Game',

  components: {
    GameOver,
    CurrentRound,
    ScoreBoard,
    ScoreInput,
  },

  computed: mapState({
    playerName: (state) => state.gameController.currentPlayerName,
    gameController: (state) => state.gameController,
    disableUndo: (state) => state.gameController.history.length === 0,
    gameover: (state) => state.gameController.gameover,
    closestDarts: (state) => state.gameController.closestDarts,
  }),

  methods: {
    undo() {
      this.gameController.undo();
    },
  },
};
</script>

<style scoped>
.container,
.container * {
  font-size: 16px;
}

.container {
  padding: 20px;
}

.container > div {
  margin-bottom: 15px;
}

.current-player {
  font-size: 20px;
  font-weight: bold;
}

.undo {
  position: absolute;
  right: 20px;
  top: 15px;

  background: white;
  color: black;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 2px;
}

.undo.disabled {
  cursor: not-allowed;
  background: #ccc;
  color: #666;
}
</style>
