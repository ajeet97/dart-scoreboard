<template>
  <div>
    <div>
      <label>Players</label>
      <select
        v-model="count"
        @change="onChangePlayersInfo"
      >
        <option :value="2">2</option>
        <option :value="3">3</option>
        <option :value="4">4</option>
        <option :value="5">5</option>
      </select>
    </div>

    <div class="name" v-for="playerNumber in count" :key="playerNumber">
      <label>Player{{ playerNumber }}</label>
      <input
        v-model="names[playerNumber - 1]"
        type="text"
        :placeholder="`Player${playerNumber}`"
        @change="onChangePlayersInfo"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'PlayerSelect',

  data: () => ({
    count: 2,
    names: [],
  }),

  created() {
    this.count = this.totalPlayers;
    this.names = this.playerNames;
  },

  computed: mapState(['totalPlayers', 'playerNames']),

  methods: {
    ...mapActions(['updatePlayersInfo']),

    onChangePlayersInfo() {
      this.updatePlayersInfo({ count: this.count, names: this.names });
    },
  },
};
</script>

<style scoped>
label {
  padding-right: 15px;
}

select {
  width: 50px;
  border-radius: 2px;
  height: 25px;
  font-size: 16px;
}

.name {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
}

input {
  flex-grow: 1;
  font-size: 16px;
  min-width: 0;
}
</style>
