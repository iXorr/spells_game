import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

// переместить auth.js и всё вместе с ним в pages/auth
import { checkAuth, isAuth } from './auth';

import { startGame, chosenDifficulty, resetAll } from '@entities/gameStates'

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async (to, from) => {
  // тогда уж... и этот роутер тоже сделать локально для Auth?
  await checkAuth()

  if (!isAuth.value && !to.path.includes('/auth')) {
    return { path: '/auth/login' }
  }

  if (isAuth.value && to.path.includes('/auth')) {
    return { path: '/' }
  }

  // переместить всё в локальный роутер для Game.vue
  if (to.path.includes('/game')) {
    if (chosenDifficulty.value == null) {
      return { path: '/' }
    } else {
      if (to.path === '/game') {
        startGame()
      }
    }
  }

  if (from.path.includes('/game') && !to.path.includes('/game')) {
    resetAll()
  }
})

export default router;
