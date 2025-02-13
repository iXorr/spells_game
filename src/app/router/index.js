import { createRouter, createWebHistory } from 'vue-router';
import { startGame, stopGame, pauseGame } from '@entities/gameScore'
import { routes } from './routes';
import { isAuth } from './auth';

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthRequired = !['/auth', '/'].includes(to.path)

  if (isAuthRequired && !isAuth()) {
    next('/auth')
    return
  }

  if (to.path === '/game') {
    startGame()
  }

  if (from.path === '/game') {
    pauseGame()

    if (true) {
      stopGame()
      next()
    } else {
      next(false)
    }
  } else {
    next()
  }
})

export default router;
