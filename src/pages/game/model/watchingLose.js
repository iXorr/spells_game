import { watchEffect } from "vue"
import { skippedDiamonds, collectedDiamonds } from '@entities/gameScore'
import { isRoundActive } from '../store/roundActivity'

export function watchingLose() {
  return watchEffect(() => {
    if (skippedDiamonds.value >= 3) {
      isRoundActive.value = false
      skippedDiamonds.value = 0
      collectedDiamonds.value = 0
    }
  })
}