import { watchEffect } from "vue"
import { useRouter } from "vue-router"
import { skippedDiamonds } from '@entities/gameScore'

export function watchingLose() {
  const router = useRouter()

  return watchEffect(() => {
    if (skippedDiamonds.value >= 3) {
      router.push('/game/results')
    }
  })
}