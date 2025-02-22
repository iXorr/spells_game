import { watchEffect } from "vue"
import { useRouter } from "vue-router"
import { collectedBarrels, skippedDiamonds, stopGame } from '@entities/gameStates'

export function watchingLose() {
  const router = useRouter()

  return watchEffect(() => {
    if (skippedDiamonds.value >= 3 || collectedBarrels.value >= 3) {
      stopGame()

      setTimeout(() => {
        router.push('/game/results')                
      }, 250);
    }
  })
}