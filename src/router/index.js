import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/login.vue')
  },
  {
    path: '/live',
    component: () => import('../views/live.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
