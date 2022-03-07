import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FolioView from '../views/FolioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/folio',
      name: 'portfolio',
      component: FolioView
    },
    {
      path: '/about',
      name: 'contact',
      component: AboutView
    }
  ]
})

export default router
