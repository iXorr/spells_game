import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

// переместить auth.js и всё вместе с ним в pages/auth
import { isAuth } from './auth';

import { startGame, stopGame, chosenDifficulty, resetAll } from '@entities/gameStates'

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from) => {
  if (!isAuth.value && !to.path.includes('/auth')) {
    return { path: '/auth' }
  }

  if (isAuth.value && to.path.includes('/auth')) {
    return { path: '/' }
  }

  if (to.path.includes('/game')) {
    if (chosenDifficulty.value == null) {
      return { path: '/' }
    } else {
      startGame()
    }
  }
})

export default router;
