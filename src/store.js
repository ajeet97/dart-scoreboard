import { createStore } from 'vuex';

import GameController from './lib/GameController';

function clamp(val, min, max) {
  if (val < min) return min;
  if (val > max) return max;
  return val;
}

function loadTotalPlayers() {
  const totalPlayers = Number.parseInt(localStorage.getItem('totalPlayers'), 10);
  return Number.isNaN(totalPlayers) ? 2 : totalPlayers;
}

function loadPlayerNames() {
  try {
    return JSON.parse(localStorage.getItem('playerNames')) || [];
  } catch (e) {
    return [];
  }
}

function loadGameOptions() {
  const opts = { initialScore: 501, swd: false, ewd: true };
  try {
    return JSON.parse(localStorage.getItem('gameOptions')) || opts;
  } catch (e) {
    return opts;
  }
}

export default createStore({
  state: {
    gameController: null,

    totalPlayers: loadTotalPlayers(),
    playerNames: loadPlayerNames(),
    gameOptions: loadGameOptions(),
    enableDoublesRule: false,

    isGameRunning: false,
  },

  mutations: {
    updateTotalPlayers(state, value) {
      state.totalPlayers = value;
      localStorage.setItem('totalPlayers', value);
    },

    updatePlayerNames(state, names) {
      state.playerNames = names;
      localStorage.setItem('playerNames', JSON.stringify(names));
    },

    updateGameOptions(state, opts) {
      state.gameOptions = opts;
      localStorage.setItem('gameOptions', JSON.stringify(opts));
    },

    startGame(state) {
      state.isGameRunning = true;

      state.gameController = new GameController({
        totalPlayers: state.totalPlayers,
        playerNames: state.playerNames,
        enableDoublesRule: state.enableDoublesRule,
        ...state.gameOptions,
      });
    },

    showMenu(state) {
      state.isGameRunning = false;
    },
  },

  actions: {
    updatePlayersInfo({ commit }, { count, names }) {
      const totalPlayers = clamp(count, 2, 5);
      const playerNames = Array(totalPlayers).fill().map((v, i) => names[i] || null);

      commit('updateTotalPlayers', totalPlayers);
      commit('updatePlayerNames', playerNames);
    },
  },
});
