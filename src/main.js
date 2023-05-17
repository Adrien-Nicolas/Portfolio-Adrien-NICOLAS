import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount('#app')
import VueSplide from '@splidejs/vue-splide';
import VueGtag from "vue-gtag";



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetimeline from "@growthbunker/vuetimeline"
createApp.use(vuetimeline, VueSplide);

createApp.use(VueSplide);
createApp.use(VueGtag, {
    config: { id: "G-9N0ZMNFFVP" }
  });

createApp.mount('#app')

  
