import { onMounted, onBeforeUnmount } from 'vue';

import { 
  pauseGame,
  togglePause,
  resumeGame,
  isWarnVisible 
} from '@entities/gameStates'

export function displayWarn() {
  if (isWarnVisible.value) {
    resumeGame()
  } else {
    pauseGame()
  }

  isWarnVisible.value = !isWarnVisible.value
}

function keysHandler(event) {
  if (event.key === ' ') {
    if (!isWarnVisible.value) {
      togglePause()
    }
  } else if (event.key === 'Escape') {
    displayWarn()
  }
}

export function bindListeners() {
  onMounted(() => {
    document.addEventListener('keydown', keysHandler)
  })
  
  onBeforeUnmount(() => {
    document.removeEventListener('keydown', keysHandler)
  })
}