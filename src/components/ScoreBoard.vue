<template>
  <div class="scoreboard">
    <table>
      <tr class="heading">
        <td>Player</td>
        <td></td>
        <td class='center'>Score</td>
        <td class='center' style="font-size: 14px;">Best Round</td>
        <td class='center' style="font-size: 14px;">Last Round</td>
      </tr>
      <tr
        v-for="n in totalPlayers"
        :key="n"
        :class="{curr: n - 1 === currentPlayer}">
        <td>{{ names[n - 1] || `Player${n}` }}</td>
        <td>{{ rank(n - 1) }}</td>
        <td class='center'>{{ scores[n - 1] }}</td>
        <td class='center' style="font-size: 14px;">
          {{bestRound(n - 1)}}
        </td>
        <td
          :class='{center: true, foul: lastRoundFouls[n - 1]}'
          style="font-size: 14px;">
          {{lastRound(n - 1)}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ScoreBoard',

  computed: {
    ...mapState({
      currentPlayer: (state) => state.gameController.currentPlayer,
      totalPlayers: (state) => state.gameController.playerController.total,
      names: (state) => state.gameController.playerController.names,
      scores: (state) => state.gameController.playerController.scores,
      bestRounds: (state) => state.gameController.playerController.bestRounds,
      lastRounds: (state) => state.gameController.playerController.lastRounds,
      lastRoundFouls: (state) => state.gameController.playerController.lastRoundFouls,
      ranks: (state) => state.gameController.playerController.ranks,
    }),
  },

  methods: {
    bestRound(i) {
      return Array(3)
        .fill()
        .map((v, j) => this.bestRounds[i][j] || '-')
        .join(' ');
    },

    lastRound(i) {
      return Array(3)
        .fill()
        .map((v, j) => this.lastRounds[i][j] || '-')
        .join(' ');
    },

    rank(i) {
      const r = this.ranks[i];
      if (r < 1 || r > this.totalPlayers) return '';
      if (r === 1) return `${r}st`;
      if (r === 2) return `${r}nd`;
      if (r === 3) return `${r}rd`;
      return `${r}th`;
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-spacing: 0;
  background: #666;
  color: #ddd;
}

.heading {
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

.curr {
  color: white;
  font-weight: bold;
}

.foul {
  color: #ff7a7a;
}
</style>
