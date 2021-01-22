<template>
  <form>
    <div class="grid grid-cols-1">
        <!-- <InputText type="text" placeholder="Nome" @input="handleNomeInput">
        <InputText type="email" placeholder="E-mail">
        <InputText type="password" placeholder="Senha"> -->
    </div>
   
  </form>
</template>

<script>
export default {
    data() {
        return {
            nome: "",
            email: "",
            senha: ""
        }
    },
    methods: {
        handleNomeInput(e) {
            this.nome = e.target.value;
            console.log("Seu nome, por ora é: "+ this.nome);
        }
    }
}
</script>

<style>

</style>