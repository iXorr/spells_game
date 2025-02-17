import dot from 'dotenv'
dot.config()

import express from "express"
import bodyParser from "body-parser"
import cors from 'cors'
import cookieParser from "cookie-parser"
import mysql from 'mysql2/promise'

let db_con

try {
  db_con = await mysql.createConnection({
    host: 'localhost',
    database: 'game_db',
    user: 'root',
    password: ''
  })
} catch (err) {
  console.log(err.message)
}

const app = express()
const frontend = import.meta.dirname + "\\frontend"

app.use(cors())
app.use(express.static(frontend))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/register', async (req, res) => {
  res.send('Запрос был получен!')
})

app.get('*', (req, res) => {
  res.sendFile(frontend + "\\index.html")
})

app.listen(process.env.PORT, () => {
  console.log('...running!')
})