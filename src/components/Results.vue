<template>
    <h2> RESULTS</h2>
    <p>Your reaction time was {{ score }}ms</p>
    <p>
      Classification: 
      <span :style="{color: color }">{{ classification }}</span>
    </p>
</template>

<script>
export default {
    props: ['score'],
    data(){
        return {
            classification: "",
            color: "red"
        }
    },
    mounted(){
        if(this.score < 50) {
            this.classification = "You're soooo fast";
            this.color = "green";
        }
        else if(this.score < 200) {
            this.classification = "You're fast";
            this.color = "blue";
        }
        else if(this.score < 500) {
            this.classification = "You're not so fast";
             this.color = "brown";
        }
        else if(this.score < 700) {
            this.classification = "You're horrible";
            this.color = "red";
        }
        else {
            this.classification = "You're a piece of shit";
            this.color = "red";
        }
    }
}
</script>

<style>

</style>