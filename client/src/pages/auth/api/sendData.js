import axios from 'axios'

import { login, password } from '../store/userData'
import { checkRegister } from '../model/validate'

export function tryRegister() {
  if (checkRegister()) {
    sendLogin()
  }
}

function sendLogin() {
  axios.post('http://localhost:3000', {
    'login': login.value,
    'password': password.value 
  })
  .then(res => console.log(res))
  .catch(err => console.log(err.message))
}