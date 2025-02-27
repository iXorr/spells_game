import axios from 'axios'
import { BACKEND_URL } from '@shared/config'
import { translateDifficulty } from "../model/translateDifficult"

export async function getRatings() {
  try {
    const response = await axios.get(`${BACKEND_URL}/ratings`)
    response.data = translateDifficulty(response.data)
    return response.data
  } catch (err) {
    return null
  }
}