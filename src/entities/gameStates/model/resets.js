import { collectedDiamonds, skippedDiamonds } from '../store/items'
import { isPaused, isRoundActive, isWarnVisible } from '../store/gameStatus'
import { chosenDiamondIcon, chosenDifficulty } from '../store/settings'

export function resetGameScore() {
  collectedDiamonds.value = 0
  skippedDiamonds.value = 0
}

export function resetGameStatus() {
  isPaused.value = false
  isRoundActive.value = false
  isWarnVisible.value = false
}

export function resetGameSettings() {
  chosenDifficulty.value = null
  chosenDiamondIcon.value = 'default'
}

export function resetAll() {
  resetGameScore()
  resetGameStatus()
  resetGameSettings()
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