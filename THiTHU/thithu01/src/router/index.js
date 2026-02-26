import { createRouter, createWebHistory } from 'vue-router'
import JobList from '../components/JobList.vue'
import JobDetail from '../components/JobDetail.vue'

const routes = [
  { path: '/', component: JobList },
  { path: '/detail/:id', component: JobDetail }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router