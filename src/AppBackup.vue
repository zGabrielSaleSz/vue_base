<template>
  <div class="bg-red-500">
      <h1>Joguinho da velocidade mental</h1>
      <button v-on:click="start" :disabled="isPlaying">Play</button>
      <Block v-if="isPlaying" :delay="delay"  @end="endGame" />
      <Result v-if="showResults" :score="score" />
  </div>


</template>

<script>
import Block from './components/Block.vue'
import Result from './components/Results.vue'

export default {
  name: 'App',
  components: {Block, Result },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: 0,
      showResults: false
    }
  },
  methods: {
    start(){
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResults = false;
    },
    endGame(data){
      this.score = data;
      this.isPlaying = false;
      this.showResults = true;
    }
  }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #444;
    margin-top: 60px;
}
button{
    padding: 15px;
    background-color: blueviolet;
    color: white;
    border-radius: 10px;
    border: 1px solid;
    width: 200px;

}
button:disabled{
  background-color: gray;
}
</style>
