import { collectedDiamonds, skippedDiamonds } from '@entities/gameScore'

export function changeScoreOnClick(blockStatus, blockCallback) {
  blockStatus ? collectedDiamonds.value++ : collectedDiamonds.value--
  blockCallback()
}

export function changeScoreOnFall(blockStatus, blockCallback) {
  blockStatus ? skippedDiamonds.value++ : null
  blockCallback()
}