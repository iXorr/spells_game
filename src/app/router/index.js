import { createRouter, createWebHistory } from 'vue-router'
import { Menu, Settings, Top, Auth } from '@pages/menu'
import { Game } from '@pages/game'

const routes = [
  {
    path: '/',
    redirect: '/menu'
  },

  {
    path: '/menu',
    component: Menu,
    children: [
      { path: 'top', component: Top },
      { path: 'settings', component: Settings },
    ]
  },

  {
    path: '/game',
    component: Game
  },

  {
    path: '/auth',
    component: Auth
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// вынести в отдельный модуль auth
// + всё делала нейронка
router.beforeEach((to, from, next) => {
  const isAuthRequired = !['/auth', '/'].includes(to.path);

  if (isAuthRequired && !isAuthenticated()) {
    next('/auth');
  } else {
    next();
  }
});

function isAuthenticated() {
  return true;
}

export default router