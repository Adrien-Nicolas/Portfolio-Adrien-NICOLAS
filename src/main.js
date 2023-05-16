import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount('#app')
import VueSplide from '@splidejs/vue-splide';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetimeline from "@growthbunker/vuetimeline"
createApp.use(vuetimeline, VueSplide);

createApp.use(VueSplide).mount('#app')


