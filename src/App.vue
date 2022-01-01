<template>
  <home v-if="!isRunning"/>
  <game v-else />
</template>

<script>
import { mapState } from 'vuex';

import Home from './views/Home.vue';
import Game from './views/Game.vue';

export default {
  name: 'App',
  components: { Home, Game },
  computed: mapState({ isRunning: (state) => state.isGameRunning }),
};
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  background-color: black;
  color: white;
  margin: 0;
  padding: 0;
  font: 400 14px/21px 'Open Sans', sans-serif;
}

html,
body,
#app {
  height: 100%;
}
</style>
