import express from 'express'
import { register, login, checkJwt } from '../controllers/authControllers.js'

const authRouter = express.Router()

authRouter.post('/register', register)
authRouter.post('/login', login)
authRouter.get('/checkjwt', checkJwt)

export { authRouter }