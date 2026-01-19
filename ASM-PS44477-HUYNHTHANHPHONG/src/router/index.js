import { createRouter, createWebHistory } from 'vue-router'

// import component
import Index from '../components/index.vue'
// (nếu chưa làm các trang khác thì tạm COMMENT)

// import Login from '../components/Login.vue'
// import Register from '../components/Register.vue'

const routes = [
  { path: '/', component: Index },
  // { path: '/login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
