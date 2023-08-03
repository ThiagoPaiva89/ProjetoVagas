<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <PesquisarVaga></PesquisarVaga>
      </div>
    </div>

    <ListaVagas></ListaVagas>

    <div class="row mt-5">
      <div class="col-4">
        <Indicador
          titulo="Vagas Abertas"
          indicador="100"
          bg="bg-dark"
          color="text-white"
        ></Indicador>
      </div>
      <div class="col-4">
        <Indicador
          titulo="Profissionais Cadastrados"
          indicador="225"
          bg="bg-dark"
          color="text-white"
        ></Indicador>
      </div>
      <div class="col-4">
        <Indicador
          titulo="Visitantes Online"
          :indicador="usuariosOnline"
          bg="bg-light"
          color="text-dark"
        ></Indicador>
      </div>
    </div>
  </div>
</template>

<script>
import PesquisarVaga from "@/components/comuns/PesquisarVaga.vue";
import ListaVagas from "@/components/comuns/ListaVagas.vue";
import Indicador from "@/components/comuns/Indicador.vue";

export default {
  name: "Home",
  components: {
    PesquisarVaga,
    Indicador,
    ListaVagas,
  },
  methods: {
    getUsuariosOnline() {
      this.usuariosOnline = Math.floor(Math.random() * 101); //entre 0 e 100
    },
  },
  data: () => ({
    usuariosOnline: 0,
  }),
  created() {
    setInterval(this.getUsuariosOnline, 1000); // a cada 1 segundo
  },

  /*
  activated() {
    console.log("Componente é ativado");
  },
  deactivated() {
    console.log("Componente é Desativado");
  },
  beforeUnmount() {
    console.log("Antes de Desmontar/Destruir");
  },
  unmounted() {
    console.log("Desmontado/Destruído");
  },*/
};
</script>

<style scoped></style>