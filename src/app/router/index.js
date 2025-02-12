import { createRouter, createWebHistory } from 'vue-router'
import { DifficultySelect, Top } from '@pages/menu'
import { Game } from '@pages/game'

const routes = [
  // {
  //   path: '/', redirect: '/menu'
  // },

  {
    path: '/top',
    component: Top
  },
  
  {
    path: '/difficulty',
    component: DifficultySelect
  },

  // {
  //   path: '/menu',
  //   children: [
  //     { path: 'top', component: Top },
  //     { path: 'difficulty', component: DifficultySelect }
  //   ]
  // },

  {
    path: '/game',
    component: Game
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router