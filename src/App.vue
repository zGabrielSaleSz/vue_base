<template>
  <div id="app">
    <div class="bg-white">
      <div class="grid grid-cols-1">
        <InputText :content="count" type="password" placeholder="Password" @handleInput="handlePasswordInput"/>
        <!-- {{passwordComputed}} -->
        {{password}}
        <button @click="receiveData">Click me again</button>
      </div>
      
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
import axios from 'axios';

export default {
  name: 'App',
  components: { InputText },
  setup() {
    const store = useStore();
    const count = computed(() => store.state.number);
    let password = ref("");
    const head = {
      headers: { 'Content-Type': 'application/json' }
    };
  
    const passwordComputed = computed(() => password.value);
    function increment() {
      console.log("incremento");
      console.log(store);
      store.commit('increment');
    }
    async function receiveData()
    {
     
      try {
        const res = await axios.get(`http://localhost:3000/posts`,head);
        console.log(res);
      } catch(e) {
        console.error(e)
      }
    }
    function decrement() {
      console.log("decremento");
      store.commit('decrement');
    }

    function handlePasswordInput(e){
      password.value = e;
    }
    return { count, increment, decrement, handlePasswordInput, password, passwordComputed, receiveData };
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
