import { createRouter, createWebHistory } from 'vue-router'
import { Menu, DifficultySelect, Top } from '@pages/menu'
import { Game } from '@pages/game'

const routes = [
  {
    path: '/', redirect: '/menu'
  },

  {
    path: '/game',
    component: Game
  },

  {
    path: '/menu',
    component: Menu,
    children: [
      { path: 'top', component: Top },
      { path: 'difficulty', component: DifficultySelect }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router