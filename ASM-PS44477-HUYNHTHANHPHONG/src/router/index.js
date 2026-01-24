import { createRouter, createWebHistory } from 'vue-router'

// import component
import Index from '../components/index.vue'
import login from '../components/login.vue'
import register from '../components/register.vue'
import profile from '../components/Profile.vue'
import postDetail from '../components/PostDetail.vue'
import createPost from '../components/createPost.vue' 


// (nếu chưa làm các trang khác thì tạm COMMENT)

// import Login from '../components/Login.vue'
// import Register from '../components/Register.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/login', component: login },
  { path: '/register', component: register },
  { path: '/profile', component: profile },
  { path: '/postDetail', component: postDetail },
  { path: '/create-post', component: createPost },
  // { path: '/login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
