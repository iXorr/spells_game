import { watchEffect } from "vue"
import { skippedDiamonds } from '@entities/gameScore'
import { isRoundActive } from '../store/roundActivity'
import { blocks } from './spawningBlocks'

export function watchingLose() {
  return watchEffect(() => {
    if (skippedDiamonds.value >= 3) {
      skippedDiamonds.value = 0
      isRoundActive.value = false
      blocks.value = []
    }
  })
}