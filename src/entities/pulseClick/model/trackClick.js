import { ref } from 'vue'

const PULSE_ANIMATION_DELAY = 150

const coords = ref({ x: 0, y: 0 })
const dynPulseClasses = ref('pulse')

function trackClick(event) {
  coords.value.x = event.clientX
  coords.value.y = event.clientY

  dynPulseClasses.value += ' pulse--active'

  setTimeout(() => {
    dynPulseClasses.value = 'pulse'
  }, PULSE_ANIMATION_DELAY);
}

export { coords, dynPulseClasses, trackClick }