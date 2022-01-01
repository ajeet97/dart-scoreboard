<template>
  <div class="menu">
    <game-type-select />
    <player-select />
    <div class="start" @click="startGame">Start</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

import GameTypeSelect from './GameTypeSelect.vue';
import PlayerSelect from './PlayerSelect.vue';

export default {
  name: 'Menu',

  components: {
    GameTypeSelect,
    PlayerSelect,
  },

  methods: mapMutations(['startGame']),

  // TODO: remove later
  // mounted() {
  //   this.startGame();
  // },
};
</script>

<style scoped>
.menu {
  background: white;
  color: black;
  width: 100%;
  padding: 15px 20px;
  border-radius: 2px;
}

.menu, .menu * {
  font-size: 16px;
}

.start {
  width: 100%;
  background: #ddd;
  padding: 10px 20px;
  text-align: center;
  font-size: 18px;
  border-radius: 2px;
}

.start:active {
  background: #ccc;
}
</style>
