<template>
  <div class="container">
    <div class="heading">Dart Scoreboard</div>
    <game-menu />
  </div>
</template>

<script>
import GameMenu from '../components/menu/Menu.vue';

export default {
  name: 'Home',
  components: { GameMenu },
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

.heading {
  text-align: center;
  font-size: 30px;
  margin-bottom: 20px;
}
</style>
