import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CoffeView from '../views/CoffeView.vue'
import CoffeDetail from '../views/CoffeDetail.vue'
import KeranjangView from '../views/KeranjangView.vue'
import PesananSukses from '../views/PesananSukses.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/coffe',
    name: 'Coffe',
    component: CoffeView
  },
  {
    path: '/keranjang',
    name: 'KeranjangView',
    component: KeranjangView
  },
  {
    path: '/pesanan-sukses',
    name: 'PesananSukses',
    component: PesananSukses
  },
  {
    // detail router
    path: '/coffe/:id',
    name: 'CoffeDetail',
    component: CoffeDetail
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
