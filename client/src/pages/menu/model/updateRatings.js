import { onMounted } from 'vue'
import { currentRatings, getRatings } from '../api/getRatings'

export function updateRatings() {
  return onMounted(async () => {
    currentRatings.value = await getRatings()
  })
}