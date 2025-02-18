import dot from 'dotenv'
dot.config()

import cors from 'cors'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import express from "express"
import bodyParser from "body-parser"
import fs from 'fs/promises'
import path from 'path'

const app = express()
const frontend = import.meta.dirname + "\\frontend"
const usersFile = path.join(import.meta.dirname, 'data', 'users.json')

app.use(cors())
app.use(express.static(frontend))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Функция загрузки пользователей из файла
async function loadUsers() {
  try {
    const data = await fs.readFile(usersFile, 'utf-8')
    return JSON.parse(data)
  } catch (err) {
    console.error('Ошибка загрузки users.json:', err)
    return [] // Если файла нет, вернуть пустой массив
  }
}

// Функция сохранения пользователей в файл
async function saveUsers() {
  try {
    await fs.writeFile(usersFile, JSON.stringify(users, null, 2))
  } catch (err) {
    console.error('Ошибка сохранения users.json:', err)
  }
}

// Загружаем пользователей из файла
let users = await loadUsers()

// Прокси для автоматического сохранения users.json при изменении массива
users = new Proxy(users, {
  get(target, property) {
    return target[property] // Читаем данные нормально
  },
  set(target, property, value) {
    target[property] = value
    saveUsers() // Автоматически сохраняем изменения
    return true
  },
  apply(target, thisArg, argumentsList) {
    const result = target.apply(thisArg, argumentsList)
    saveUsers()
    return result
  }
})

function getToken(login) {
  return jwt.sign({ login: login }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: '1m'
  })
}

function sendToken(response, login) {
  let token = getToken(login)
  response.status(201).json({ token: token, login: login })
}

app.post('/register', async (req, res) => {
  let { login, password } = req.body

  let user = users.find(user => user.login == login)
  if (user)
    return res.status(400).send('Пользователь уже существует')

  let hashedPassword = await bcrypt.hash(password, 10)

  users.push({ login: login, password: hashedPassword }) // Добавляем в массив
  await saveUsers() // Сохраняем в файл
  sendToken(res, login)
})

app.post('/login', async (req, res) => {
  let { login, password } = req.body

  let user = users.find(user => user.login == login)
  if (!user) 
    return res.status(400).send('Неверное имя пользователя')

  let isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch)
    return res.status(400).send('Неверный пароль')

  sendToken(res, login)
})

// app.post('/recordRating', async (req, res) => {
//   const data = req.body

//   console.log(data)
// })

app.get('/checkjwt', async (req, res) => {
  const token = req.header('Authorization')
  
  if (!token)
    return res.status(401).send('Токен отсутствует')

  try {
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
    res.json({ valid: true, login: decoded.login })
  } catch (err) {
    res.status(401).json({ valid: false, message: 'Недействительный токен' })
  }
})

app.get('*', (req, res) => {
  res.sendFile(frontend + "\\index.html")
})

app.listen(process.env.PORT, () => {
  console.log('...running!')
})
