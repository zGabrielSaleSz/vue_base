<template>
  <div id="app" class="bg-red-500">
    <InputText :content="defaultContent" @input="logValue"/>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    {{count}}
  </div>


</template>

<script>
import InputText from './components/common/InputText.vue'
import { useStore } from 'vuex'
import { computed } from 'vue';

export default {
  name: 'App',
  components: { InputText },
  setup() {
    const store = useStore();
    const count = computed(() => store.state.number);

    function increment() {
      console.log("icnremento");
      console.log(store);
      store.commit('increment');
    }

    function decrement() {
      console.log("decremento");
      store.commit('decrement');
    }
    return { count, increment, decrement };
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
