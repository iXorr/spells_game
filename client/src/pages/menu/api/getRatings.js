import axios from 'axios'
import { BACKEND_URL } from '@shared/config'

export async function getRatings() {
  try {
    const response = await axios.get(`${BACKEND_URL}/ratings`)
    return response.data
  } catch (err) {
    return null
  }
}