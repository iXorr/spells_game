import axios from 'axios'
import { warnMsg, login, password } from '../store/userData'
import { checkRegister } from '../model/validate'

export function tryRegister() {
  if (checkRegister()) {
    sendToReg()
  }
}

function writeToken(res) {
  setTimeout(() => {
    const token = res.data.token
    localStorage.setItem('token', token)

    window.location.reload()
  }, 1000)
}

function sendToReg() {
  axios.post('http://localhost:3000/register', {
    'login': login.value,
    'password': password.value 
  })
  .then(res => {
    warnMsg.value = 'Вы зарегистрировались'
    writeToken(res)
  })
  .catch(err => {
    warnMsg.value = 'Произошла ошибка'

    if (err.status)
      warnMsg.value = 'Пользователь уже зарегистрирован'
  })
}

export function tryLogin() {
  axios.post('http://localhost:3000/login', {
    'login': login.value,
    'password': password.value
  })
  .then(res => {
    warnMsg.value = 'Добро пожаловать, {имя пользователя}'
    writeToken(res)
  })
  .catch(err => {
    warnMsg.value = 'Произошла ошибка'

    if (err.status)
      warnMsg.value = 'Неверные данные'
  })
}