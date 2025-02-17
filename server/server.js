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
const root = import.meta.dirname + "\\dist"

app.use(cors())
app.use(express.static(root))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const info = await db_con.query('SELECT * FROM users')
console.log(info[0])

app.post('*', async (req, res) => {
  let list = await db_con.query(`SELECT * FROM users WHERE login='${req.body.login}'`)

  if (list[0].length === 0) {
    res.send('')
  }
})

app.get('*', (req, res) => {
  res.sendFile(root + "\\index.html")
})

app.listen(process.env.PORT, () => {
  console.log('...running!')
})