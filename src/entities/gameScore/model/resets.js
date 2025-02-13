import { collectedDiamonds, skippedDiamonds } from '../store/items'
import { isPaused, isRoundActive } from '../store/gameStatus'

function resetScore() {
  collectedDiamonds.value = 0
  skippedDiamonds.value = 0
}

export function stopGame() {
  isRoundActive.value = false
}

export function startGame() {
  isPaused.value = false
  isRoundActive.value = true
}

export function togglePause() {
  isPaused.value = !isPaused.value
}

export function pauseGame() {
  isPaused.value = true
}

export function resumeGame() {
  isPaused.value = false
}