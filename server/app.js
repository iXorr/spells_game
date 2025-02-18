import dot from 'dotenv'
dot.config()

import cors from 'cors'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import express from "express"
import bodyParser from "body-parser"

const app = express()
const frontend = import.meta.dirname + "\\frontend"

app.use(cors())
app.use(express.static(frontend))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

let users = []

function getToken(login) {
  return jwt.sign({ login: login }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: '1m'
  })
}

function sendToken(response, login) {
  let token = getToken(login)
  response.status(201).json({ token })
}

app.post('/register', async (req, res) => {
  let { login, password } = req.body

  let user = users.find(user => user.login == login)
  if (user)
    return res.status(400).send('Пользователь уже существует')

  let hashedPassword = await bcrypt.hash(password, 10)
  users.push({ login: login, password: hashedPassword })

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