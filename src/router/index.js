import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home/Home.vue')
  },
  {
    path: '/songmenu',
    name: 'SongMenu',
    component: () => import('@/views/SongMenu/SongMenu.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
