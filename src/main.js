// main.js
import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'
import router from "./router";

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import vuetify from './plugins/vuetify'

console.log('Router object:', router)
const app = createApp(App)
app.use(createPinia());
app.use(router);
app.use(vuetify)
app.mount('#app')
