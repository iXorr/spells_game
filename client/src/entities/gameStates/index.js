import { chosenDiamondIcon, chosenDifficulty } from './store/settings'
import { collectedDiamonds, skippedDiamonds, collectedBarrels } from './store/items'
import { isGameActive, isPaused, isWarnVisible } from './store/gameStatus'
import { userLogin } from './store/userInfo'

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
    userLogin,
    isGameActive,
    isPaused,
    isWarnVisible,
    chosenDiamondIcon,
    chosenDifficulty,
    collectedDiamonds, 
    skippedDiamonds,
    collectedBarrels,
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