<template>
  <input type="text" v-model="content" @input="updateContent" placeholder="Placeholder" class=""/>

</template>

<script>
export default {
    props: ['content'],
    emits: ['input'],
    methods:{
        updateContent(text){
            this.$emit('input', this.content);
        }
    }
}
</script>

<style scoped>
  input{
    @apply border-2;
    @apply border-blue-500;
    @apply bg-white;
    @apply placeholder-white;

  }
  
  input:hover {
    
    @apply bg-blue-500;
  }
</style>