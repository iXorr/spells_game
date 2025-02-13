import { chosenDiamondIcon, chosenDifficulty } from './store/settings'
import { collectedDiamonds, skippedDiamonds} from './store/items'
import { isRoundActive, isPaused, isWarnVisible } from './store/gameStatus'

import { 
    startGame, 
    stopGame, 
    togglePause,
    pauseGame,
    resumeGame,
    resetAll,
    resetGameScore,
    resetGameStatus,
    resetGameSettings
} from './model/resets'

export {
    isRoundActive,
    isPaused,
    isWarnVisible,
    chosenDiamondIcon,
    chosenDifficulty,
    collectedDiamonds, 
    skippedDiamonds,
    stopGame,
    startGame,
    togglePause,
    pauseGame,
    resumeGame,
    resetAll,
    resetGameScore,
    resetGameStatus,
    resetGameSettings
}