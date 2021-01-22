<template>
  <div id="app">
    <div class="bg-white">
      <InputText type="password" placeholder="Password" @handleInput="handlePasswordInput"/>
      {{password}}
      <!-- <InputText :content="defaultContent" @input="logValue"/>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
      {{count}} -->
    </div>
    <router-view />
  </div>


</template>

<script>
import InputText from './components/common/InputText.vue'
import { useStore } from 'vuex'
import { computed, ref } from 'vue';

export default {
  name: 'App',
  components: { InputText },
  setup() {
    const store = useStore();
    const count = computed(() => store.state.number);
    let password = ref("");
    function increment() {
      console.log("icnremento");
      console.log(store);
      store.commit('increment');
    }

    function decrement() {
      console.log("decremento");
      store.commit('decrement');
    }

    function handlePasswordInput(e){
      password = e;
      console.log(password);
    }
    return { count, increment, decrement, handlePasswordInput, password };
  },

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
