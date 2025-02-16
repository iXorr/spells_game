import { collectedDiamonds, skippedDiamonds, collectedBarrels } from '../store/items'
import { isPaused, isGameActive, isWarnVisible } from '../store/gameStatus'
import { chosenDiamondIcon, chosenDifficulty } from '../store/settings'

export function resetGameScore() {
  collectedDiamonds.value = 0
  collectedBarrels.value = 0
  skippedDiamonds.value = 0
}

export function resetGameStatus() {
  isPaused.value = false
  isGameActive.value = false
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
  isGameActive.value = false
}

export function startGame() {
  isPaused.value = false
  isGameActive.value = true
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