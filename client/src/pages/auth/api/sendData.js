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
    const { token, login } = res.data

    localStorage.setItem('token', token)
    localStorage.setItem('login', login)
    window.location.reload()
  }, 1000)
}

function sendToReg() {
  axios.post('http://localhost:3000/register', {
    'login': login.value,
    'password': password.value 
  })
  .then(res => {
    warnMsg.value = 'Добро пожаловать'
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
    warnMsg.value = 'С возвращением'
    writeToken(res)
  })
  .catch(err => {
    warnMsg.value = 'Произошла ошибка'

    if (err.status)
      warnMsg.value = 'Неверные данные'
  })
}