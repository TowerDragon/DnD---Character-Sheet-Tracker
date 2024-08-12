import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/characterCreation',
      name: 'characterCreation',
      component: () => import('../views/CharacterCreation.vue')
    },
    {
      path: '/characterList',
      name: 'characterList',
      component: () => import('../views/CharacterList.vue')
    },
    {
      path: '/characterSheet',
      name: 'characterSheet',
      component: () => import('../views/CharacterSheet.vue')
    }
  ]
})

export default router
