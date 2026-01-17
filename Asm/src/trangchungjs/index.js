import { createRouter, createWebHistory } from 'vue-router'

// Import từng trang
import Home from '../trangchung/Home.vue'
import Login from '../trangchung/Login.vue'
import Register from '../trangchung/Register.vue'
import Profile from '../trangchung/Profile.vue'
import PostDetail from '../trangchung/PostDetail.vue'
import CreatePost from '../trangchung/CreatePost.vue'

// Danh sách đường dẫn
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/profile', component: Profile },
  { path: '/post/:id', component: PostDetail },
  { path: '/create-post', component: CreatePost },
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
