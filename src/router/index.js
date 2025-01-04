import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/esg',
    name: 'esg',
    component: () => import(/* webpackChunkName: "about" */ '../views/ESGView.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import(/* webpackChunkName: "about" */ '../views/MapView.vue')
  },
  {
    path: '/senkon',
    name: 'senkon',
    component: () => import(/* webpackChunkName: "about" */ '../views/SenkonView.vue')
  },
  {
    path: '/park',
    name: 'park',
    component: () => import(/* webpackChunkName: "about" */ '../views/ParkView.vue')
  },
  {
    path: '/techmap',
    name: 'techmap',
    component: () => import(/* webpackChunkName: "about" */ '../views/TechMap.vue')
  },
  {
    path: '/cartoonmap',
    name: 'cartoonmap',
    component: () => import(/* webpackChunkName: "about" */ '../views/CartoonMap.vue')
  },
  {
    path: '/createnew',
    name: 'createnew',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateNew.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
