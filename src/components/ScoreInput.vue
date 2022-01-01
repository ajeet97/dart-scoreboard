<template>
  <div class="scoreinput">
    <div class="input">
      <div
        v-for="input in input1a" :key="input"
        :class="{box: true, selected: select1 === input}"
        @click="handleInput1Click(input)">
        {{input}}
      </div>
    </div>
    <div class="input">
      <div
        v-for="input in input1b" :key="input"
        :class="{box: true, selected: select1 === input}"
        @click="handleInput1Click(input)">
        {{input}}
      </div>
    </div>
    <div
      :class="{
        input: true,
        input2: true,
        disabled: isInput2Disabled,
      }">
      <div
        v-for="input in input2" :key="input"
        :class="{box: true, selected: select2 === input}"
        @click="handleInput2Click(input)">
        {{input}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ScoreInput',

  data: () => ({
    input1a: ['B', 'BE', '✗'],
    input1b: ['S', 'D', 'T'],
    input2: Array(20).fill().map((v, i) => i + 1),

    select1: null,
    select2: null,
  }),

  computed: {
    ...mapState(['gameController']),

    isInput2Disabled() {
      return !this.input1b.includes(this.select1);
    },
  },

  methods: {
    handleInput1Click(input) {
      this.select1 = input;

      if (this.isInput2Disabled) {
        this.updateCurrentDart(this.select1);
      }
    },

    handleInput2Click(input) {
      if (this.isInput2Disabled) return;

      this.select2 = input;
      this.updateCurrentDart(this.select1 + this.select2);
    },

    updateCurrentDart(score) {
      this.gameController.throwDart(score);

      setTimeout(() => {
        this.select1 = null;
        this.select2 = null;
      }, 100);
    },
  },
};
</script>

<style scoped>
.scoreinput {
  margin-top: 30px;
}

.box {
  background: white;
  color: black;
  padding: 12px 0;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
}

.box.disabled {
  background: #aaa;
  color: #777;
  cursor: not-allowed;
}

.box.selected {
  background: #6dc6e4;
  color: black;
}

.input {
  display: flex;
  flex-direction: row;
  column-gap: 5px;
  row-gap: 5px;
  margin-bottom: 15px;
}

.input .box {
  flex: 1;
}

.input2 {
  flex-wrap: wrap;
}

.input2 .box {
  flex-basis: calc(25% - 10px);
}

.input2.disabled .box {
  background: #aaa;
  color: #777;
  cursor: not-allowed;
}
</style>
