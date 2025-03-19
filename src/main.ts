import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import ui from '@nuxt/ui/vue-plugin'
import VueQrcode from 'vue-qrcode'


import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('vue-qrcode', VueQrcode)

const pinia =  createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia)
app.use(ui)
app.use(router)

app.mount('#app')
