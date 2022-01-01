<template>
  <div class="darts">
    <div
      v-for="n in 3"
      :key="n"
      :class="['row', shotClass(n - 1)]">
      {{ !darts[n - 1] ? "-" : darts[n - 1] }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CurrentRound',

  computed: mapState({
    darts: (state) => state.gameController.dartController.darts,
    isFoul: (state) => state.gameController.dartController.isFoul,
  }),

  methods: {
    shotClass(i) {
      if (this.isFoul) return 'foul';
      if (this.darts[i]) return 'valid';
      return '';
    },
  },
};
</script>

<style scoped>
.darts {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  column-gap: 20px;
}

.row {
  -ms-flex: 1;
  flex: 1;
  background: white;
  color: black;
  text-align: center;
  font-size: 18px;
  padding: 10px 0px;
}

.row.valid {
  background: #e5ffe5;
  color: #007800;
}

.row.foul {
  background: #ffd9d9;
  color: #e70000;
}
</style>
