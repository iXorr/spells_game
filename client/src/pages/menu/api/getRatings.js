import { ref } from 'vue'
import axios from 'axios'

export async function getRatings() {
  try {
    const ratings = await axios.get('http://localhost:3000/ratings')
    return ratings.data
  } catch (err) {
    return null
  }
}

export const currentRatings = ref(null)