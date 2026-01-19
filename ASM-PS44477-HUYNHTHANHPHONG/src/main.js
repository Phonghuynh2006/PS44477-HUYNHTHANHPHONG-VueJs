import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// ✅ IMPORT BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import router
import router from './router/index.js'
createApp(App).use(router).mount('#app')