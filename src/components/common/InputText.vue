<template>
  <input :type="type" v-model="content" @input="handleInput" :placeholder="placeholder"/>

</template>

<script>
export default {
    props: ['content', 'type', 'placeholder'],
    emits: ['handleInput'],
    methods:{
        handleInput(text){
            this.$emit('handleInput', this.content);
        }
    }
}
</script>

<style scoped>
  input{
    @apply border-2;
    @apply bg-white;
    @apply placeholder-gray-600;
    @apply border-gray-600;
    @apply rounded-md;
    @apply p-2;
    
    @apply transition;
    @apply duration-500;
    @apply ease-in-out;
  }
input:hover
{
    @apply outline-none;
    @apply bg-white;
    @apply border-blue-500;



}
input:focus{
    @apply outline-none;
    @apply bg-white;
    @apply border-blue-500;
}
</style>