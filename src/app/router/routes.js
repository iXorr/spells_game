import { Auth, LoginForm, RegisterForm } from '@pages/auth'
import { Menu, Settings, Top } from '@pages/menu';
import { Game, Results, Interactive } from '@pages/game';

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
      { path: '', component: Interactive },
      { path: 'results', component: Results }
    ]
  },

  {
    path: '/auth',
    redirect: '/auth/login'
  },

  {
    path: '/auth',
    component: Auth,
    children: [
      { path: 'login', component: LoginForm },
      { path: 'register', component: RegisterForm },
    ]
  }
]
