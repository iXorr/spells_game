import { chosenDiamondIcon, chosenDifficulty } from './store/settings'
import { collectedDiamonds, skippedDiamonds} from './store/items'
import { isRoundActive, isPaused } from './store/gameStatus'

import { 
    startGame, 
    stopGame, 
    togglePause,
    pauseGame,
    resumeGame
} from './model/resets'

export {
    isRoundActive,
    isPaused,
    chosenDiamondIcon,
    chosenDifficulty,
    collectedDiamonds, 
    skippedDiamonds,
    stopGame,
    startGame,
    togglePause,
    pauseGame,
    resumeGame
}