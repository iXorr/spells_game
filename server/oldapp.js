import dot from 'dotenv'
dot.config()

import cors from 'cors'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import express from "express"
import bodyParser from "body-parser"
import fs from 'fs/promises'

const app = express()
const frontend = import.meta.dirname + "\\frontend"

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || origin !== 'http://192.168.223.7') {
      callback(new Error('Not allowed by CORS'));
      console.log('IF')
    } else {
      callback(null, true)
      console.log('ELSE')
    }
  },

  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.static(frontend))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// dataModel.js

async function loadFile(filePath) {
  try {
    const receivedData = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(receivedData)
  } catch (err) {
    console.error(`Ошибка загрузки ${filePath}: ` + err.message)
    return []
  }
}

async function saveFile(filePath, dataModule) {
  try {
    await fs.writeFile(filePath, JSON.stringify(dataModule, null, 2))
  } catch (err) {
    console.error(`Ошибка сохранения ${filePath}: ` + err.message)
  }
}

async function createProxy(dataModuleName) {
  let dataModule = await loadFile(`data/${dataModuleName}.json`)

  dataModule = new Proxy(dataModule, {
    get(target, property) {
      return target[property]
    },
  
    set(target, property, value) {
      target[property] = value
      saveFile(`data/${dataModuleName}.json`, dataModule)
      return true
    },
  
    apply(target, thisArg, argumentsList) {
      const result = target.apply(thisArg, argumentsList)
      saveFile(`data/${dataModuleName}.json`, dataModule)
      return result
    }
  })

  return dataModule
}

let users = await createProxy('users')
let ratings = await createProxy('ratings')





// authController.js

function getToken(login) {
  return jwt.sign({ login: login }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: '1h'
  })
}

function sendToken(response, login) {
  let token = getToken(login)
  response.status(201).json({ token: token, login: login })
}

app.post('/register', async (req, res) => {
  let { login, password } = req.body

  console.log(login, password)

  let user = users.find(user => user.login == login)
  
  if (user)
    return res.status(400).send('Пользователь уже существует')

  let hashedPassword = await bcrypt.hash(password, 10)

  users.push({ login: login, password: hashedPassword })
  await saveFile('data/users.json', users)
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

app.post('/recordRatings', async (req, res) => {
  const { collectedDiamonds, chosenDifficulty, userLogin } = req.body

  const difficultyLevels = { easy: 1, normal: 2, hard: 3, impossible: 4 };

  let existingRecordIndex = ratings.findIndex(r => r.userLogin === userLogin);
  let newRecord = { collectedDiamonds, chosenDifficulty, userLogin };

  if (existingRecordIndex !== -1) {
    let existingRecord = ratings[existingRecordIndex];
    let existingDifficulty = difficultyLevels[existingRecord.chosenDifficulty];
    let newDifficulty = difficultyLevels[chosenDifficulty];
    
    if (
      newDifficulty > existingDifficulty ||
      collectedDiamonds > existingRecord.collectedDiamonds ||
      (collectedDiamonds === existingRecord.collectedDiamonds && newDifficulty > existingDifficulty)
    ) {
      ratings[existingRecordIndex] = newRecord;
    }
  } else {
    ratings.push(newRecord);
  }

  res.status(200).send('Рейтинг обновлён')
})

app.get('/ratings', async (req, res) => {
  res.send(ratings)
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
