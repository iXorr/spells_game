import { ref } from 'vue'
import axios from 'axios'
import { BACKEND_URL } from '@shared/config'

export async function getRatings() {
  try {
    const ratings = await axios.get(`${BACKEND_URL}/ratings`)
    return ratings.data
  } catch (err) {
    return null
  }
}

export const currentRatings = ref(null)