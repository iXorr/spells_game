import { watchEffect } from "vue"
import { useRouter } from "vue-router"
import { skippedDiamonds, stopGame } from '@entities/gameStates'

export function watchingLose() {
  const router = useRouter()

  return watchEffect(() => {
    if (skippedDiamonds.value >= 3) {
      stopGame()
      router.push('/game/results')
    }
  })
}