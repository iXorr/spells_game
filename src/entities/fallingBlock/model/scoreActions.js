import { ref } from 'vue'
import { collectedDiamonds, skippedDiamonds } from '@entities/gameScore'

export const isLooted = ref(false)

export function changeScoreOnClick(isBlockDiamond) {
  console.log('test')
  isLooted.value = true
  isBlockDiamond ? collectedDiamonds.value++ : collectedDiamonds.value--
}

export function changeScoreOnFall(isBlockDiamond) {
  isBlockDiamond ? skippedDiamonds.value++ : null
}