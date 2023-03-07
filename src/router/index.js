import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartProducts.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
