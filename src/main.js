import { createApp } from "vue";
import App from "./App.vue";

// Importar o pacote mitt
import mitt from "mitt";

// Criar instância do pacote mitt
const emitter = mitt();

// Iniciar a instância do vue com base no componente App
//createApp(App).mount('#app')
const app = createApp(App);

// Configurar a instância do pacote mitt como sendo uma propriedade global para que ela fique
// disponível para todas as instâncias de componentes dentro do app
app.config.globalProperties.emitter = emitter;

// Associar a instância do vue com elemento html de id app
app.mount('#app')
