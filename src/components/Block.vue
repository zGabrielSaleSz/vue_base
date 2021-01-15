<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
      Click me
  </div>
</template>

<script>
export default {
    props:[ 'delay' ],
    data(){
        return {
            showBlock: false,
            timer: null,
            startTime: null,
            reactionTime: 0
        }
    },
    mounted() {
        setTimeout(() => {
            this.showBlock = true;
            this.startTimer();
        }, this.delay);
    },
    methods:{
        startTimer() {
            this.startTime = Date.now();
            
            // this.timer = setInterval(() => {
            //     this.reactionTime += 3;
            // }, 3);// cada 10 ms
        },
        stopTimer(){
            let current = Date.now();
            let difference = current - this.startTime;
            this.reactionTime = Math.abs(current-this.startTime);
            this.$emit('end', this.reactionTime);
        }
    },
    unmounted(){
        //dispara quando ele é destruido, (vue router)
    },
    updated() {
        //dispara quando um componente é atualizado
    }

}
</script>

<style>
    .block{
        width: 400px;
        border-radius: 20px;
        background: #0faf87;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 80px auto; 
    }
    
</style>