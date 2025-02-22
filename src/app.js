import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { authRouter } from './routes/authRoutes.js'
import { ratingsRouter } from './routes/ratingsRoutes.js'
import './config/env.js'

const app = express()

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || origin !== process.env.FRONTEND_URL) {
      callback(new Error('Not allowed by CORS'));
    } else {
      callback(null, true)
    }
  },

  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(authRouter)
app.use(ratingsRouter)

app.listen(process.env.PORT, () => {
  console.log('...running!')
})