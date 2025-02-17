import { onMounted, onBeforeUnmount } from 'vue';
import { togglePause, isWarnVisible } from '@entities/gameStates'

export function displayWarn() {
  togglePause()
  isWarnVisible.value = !isWarnVisible.value
}

function keysHandler(event) {
  if (event.key === 'Escape') {
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