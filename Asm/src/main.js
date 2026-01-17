import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// import 'bootstrap/dist/css/bootstrap.css' 
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import trangchungjs from './trangchungjs'


createApp(App).use(trangchungjs).mount('#app')
