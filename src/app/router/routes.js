import { Menu, Settings, Top, Auth } from '@pages/menu';
import { Game, Results } from '@pages/game';

export const routes = [
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
    component: Game,
    children: [
      { path: 'results', component: Results }
    ]
  },
  
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  }
]
