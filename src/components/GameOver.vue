<template>
  <div class="container">
    <div class="header">
      <div class="heading">Game Over</div>
      <div class="undo" @click="gameController.undo">UNDO</div>
    </div>
    <div class="rankings">
      <table>
        <tr class="thead">
          <td>Rank</td>
          <td>Player</td>
          <td class="center">Best Round</td>
        </tr>
        <tr v-for="n in totalPlayers" :key="n">
          <td>{{ formattedRank(n) }}</td>
          <td>{{ name(n - 1) }}</td>
          <td class="center">{{ bestRound(n - 1) }}</td>
        </tr>
      </table>
    </div>
    <div class="buttons">
      <div @click="startGame">REMATCH</div>
      <div @click="showMenu">BACK TO MENU</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'GameOver',

  computed: {
    ...mapState({
      gameController: (state) => state.gameController,
      totalPlayers: (state) => state.gameController.playerController.total,
      names: (state) => state.gameController.playerController.names,
      bestRounds: (state) => state.gameController.playerController.bestRounds,
      ranks: (state) => state.gameController.playerController.ranks,
    }),

    rankedOrder() {
      return Array(this.totalPlayers)
        .fill()
        .map((v, i) => ({ i, rank: this.ranks[i] }))
        .sort((a, b) => a.rank - b.rank)
        .map(({ i }) => i);
    },
  },

  methods: {
    ...mapMutations(['startGame', 'showMenu']),

    formattedRank(rank) {
      if (rank === 1) return `${rank}st`;
      if (rank === 2) return `${rank}nd`;
      if (rank === 3) return `${rank}rd`;
      return `${rank}th`;
    },

    name(rank) {
      const i = this.rankedOrder[rank];
      return this.names[i] || `Player${i + 1}`;
    },

    bestRound(rank) {
      const i = this.rankedOrder[rank];
      return Array(3)
        .fill()
        .map((v, j) => this.bestRounds[i][j] || '-')
        .join(' ');
    },
  },
};
</script>

<style scoped>
.container {
  position: absolute;
  width: 90%;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.header {
  display: flex;
  flex-direction: row;
}

.heading {
  font-size: 30px;
  margin-bottom: 20px;
}

.undo {
  margin-left: auto;
  margin-bottom: 5px;
  background: white;
  color: black;
  padding: 5px 10px;
  line-height: 26px;
  cursor: pointer;
  border-radius: 2px;
}

table {
  width: 100%;
  border-spacing: 0;
  background: #666;
  color: #ddd;
}

.thead {
  background: white;
  color: black;
}

td {
  padding: 5px 0px;
}

td:first-child {
  padding-left: 10px;
}

.center {
  text-align: center;
}

.buttons {
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  margin-top: 20px;
}

.buttons > div {
  flex: 1;
  background: #eee;
  padding: 15px 0px;
  text-align: center;
  border-radius: 2px;
  color: black;
  cursor: pointer;
}
</style>
