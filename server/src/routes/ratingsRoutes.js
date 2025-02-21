import express from 'express'
import { recordRatings, getRatings } from '../controllers/ratingsController.js'

const ratingsRouter = express.Router()

ratingsRouter.post('/recordRatings', recordRatings)
ratingsRouter.get('/ratings', getRatings)

export { ratingsRouter }