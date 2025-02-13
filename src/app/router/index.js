import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

import { resetGameStatus } from '@entities/gameStates'

// переместить auth.js и всё вместе с ним в pages/auth
import { isAuth } from './auth';

import { 
  startGame, 
  stopGame, 
  pauseGame,
  chosenDifficulty
} from '@entities/gameStates'

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  // const isAuthRequired = !['/auth', '/'].includes(to.path)

  // if (!isAuth.value) {
  //   next('/auth')
  //   return
  // }

  if (to.path.includes('/game')) {
    if (chosenDifficulty.value == null) {
      next('/')
      return
    } else {
      startGame()
    }
  }

  // ???
  if (from.path.includes('/game')) {
    resetGameStatus()

    if (true) {
      stopGame()
      next()
      return
    }
  } else {
    next()
  }
})

export default router;
