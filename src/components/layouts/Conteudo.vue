<template>
  <div>
    <keep-alive>
      <component :is="conteudo" />
    </keep-alive>
  </div>
</template>

<script>
import Home from "@/components/views/Home.vue";
import PublicarVaga from "@/components/views/PublicarVaga.vue";

export default {
  name: "Conteudo",
  props: {
    conteudo: {
      type: String,
      required: true,
    },
  },
  components: {
    Home,
    PublicarVaga,
  },
  /*
  beforeCreate() {
    console.log("Antes de Criar", this.teste);
  },
  created() {
    console.log("Criado", this.teste);
  },
  beforeMount() {
    console.log("Antes de Montar o template");
  },
  mounted() {
    console.log("Montado");
  },
  beforeUpdate() {
    console.log("Antes de Atualizar");
  },
  updated() {
    console.log("Atualizado");
  },

  beforeUnmount() {
    console.log("Antes de Desmontar/Destruir");
  },
  unmounted() {
    console.log("Desmontado/Destruído");
  },
  
  errorCaptured() {
    console.log("Erro Capturado");
  },
  renderTracked() {
    console.log("Re-renderização");
  },
  renderTriggered() {
    console.log("Re-renderização acionada");
  },
  activated(){
    console.log('Componente é ativado')
  },
  deactivated(){
    console.log('Componente é Desativado')
  }
  */
};
</script>

<style module>
.teste-1 {
  background-color: red;
}
#teste-2 {
  background-color: yellow;
}
</style>