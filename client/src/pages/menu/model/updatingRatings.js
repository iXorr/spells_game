import { onMounted } from 'vue'
import { currentRatings } from '../store/currentRatings'
import { getRatings } from '../api/getRatings'

export function updatingRatings() {
  return onMounted(async () => {
    currentRatings.value = await getRatings()
  })
}