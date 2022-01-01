<template>
<div class="container">
  <div class="type-select">
    <div
      v-for="(type, index) in types"
      :key="index"
      :class="{
        box: true,
        selected: index === selected
      }"
      @click="changeGameType(index)">
      {{ type.initialScore }}
    </div>
  </div>
  <div class="double-options" v-if="enableDoublesRule">
      <div>
        <input
          id="swd"
          type="checkbox"
          :checked="swd"
          :key="uiUpdateHack"
          @change="onChangeGameType"/>
        <label for="swd">Start with Double</label>
      </div>
      <div>
        <input
          id="ewd"
          type="checkbox"
          :checked="ewd"
          :key="uiUpdateHack"
          @change="onChangeGameType"/>
        <label for="ewd">End with Double</label>
      </div>
    </div>
</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'GameTypeSelect',

  data: () => ({
    selected: 1,
    types: [
      { initialScore: 101, swd: false, ewd: false },
      { initialScore: 301, swd: true, ewd: true },
      { initialScore: 501, swd: false, ewd: true },
    ],

    swd: false,
    ewd: false,

    uiUpdateHack: 1,
  }),

  created() {
    // update UI for selected type
    this.types.forEach(({ initialScore }, index) => {
      if (this.selectedInitialScore === initialScore) {
        this.selected = index;
      }
    });
    this.updateDoubleOptions();
  },

  computed: mapState({
    selectedInitialScore: (state) => state.gameOptions.initialScore,
    enableDoublesRule: (state) => state.gameOptions.enableDoublesRule,
  }),

  methods: {
    ...mapMutations(['updateGameOptions']),

    changeGameType(index) {
      this.selected = index;
      this.updateDoubleOptions();
      this.onChangeGameType();
    },

    updateDoubleOptions() {
      this.swd = this.types[this.selected].swd;
      this.ewd = this.types[this.selected].ewd;

      this.uiUpdateHack = 1 - this.uiUpdateHack;
    },

    onChangeGameType() {
      this.updateGameOptions({
        initialScore: this.types[this.selected].initialScore,
        swd: this.swd,
        ewd: this.ewd,
      });
    },
  },
};
</script>

<style scoped>
.container {
  margin-bottom: 20px;
}

.type-select {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  column-gap: 20px;
  margin-bottom: 10px;
}

.box {
  border: 1px solid #aaa;
  flex: 1;
  height: 50px;
  line-height: 0px;
  padding-top: 25px;
  cursor: pointer;
  text-align: center;
  border-radius: 2px;
}

.box.selected {
  background: #ccc;
}

.double-options {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
