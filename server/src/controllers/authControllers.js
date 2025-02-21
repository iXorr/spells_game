import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { users, saveFile, DATA_FILE } from '../model/dataModel.js'
import '../config/env.js'

function getToken(login) {
  return jwt.sign({ login: login }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: '1h'
  })
}
  
function sendToken(response, login) {
  let token = getToken(login)
  response.status(201).json({ token: token, login: login })
}

export async function register(req, res) {
  let { login, password } = req.body

  let user = users.find(user => user.login == login)
  
  if (user)
    return res.status(400).send('Пользователь уже существует')

  let hashedPassword = await bcrypt.hash(password, 10)

  users.push({ login: login, password: hashedPassword })
  await saveFile(DATA_FILE('users'), users)
  sendToken(res, login)
}

export async function login(req, res) {
  let { login, password } = req.body

  let user = users.find(user => user.login == login)

  if (!user) 
    return res.status(400).send('Неверное имя пользователя')

  let isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch)
    return res.status(400).send('Неверный пароль')

  sendToken(res, login)
}

export async function checkJwt(req, res) {
  const token = req.header('Authorization')
  
  if (!token)
    return res.status(401).send('Токен отсутствует')

  try {
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
    res.json({ valid: true, login: decoded.login })
  } catch (err) {
    res.status(401).json({ valid: false, message: 'Недействительный токен' })
  }
}