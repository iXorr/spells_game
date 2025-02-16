import { collectedDiamonds, skippedDiamonds, collectedBarrels } from '@entities/gameStates'

export function changeScoreOnClick(isBlockDiamond) {
  if (isBlockDiamond) {
    collectedDiamonds.value++
  } else {
    if (collectedDiamonds.value > 5) {
      collectedDiamonds.value -= 5
    } else {
      collectedDiamonds.value = 0
    }

    collectedBarrels.value++
  }
}

export function changeScoreOnFall(isBlockDiamond) {
  isBlockDiamond ? skippedDiamonds.value++ : null
}