import { ref } from 'vue'
import { trackClick } from './trackClick.js'

const PULSE_ANIMATION_DELAY = 150

const dynamicPulseClasses = ref('pulse')

/**
 * FUNCTION DESCR
 * @param {string} parent_event FUNCTION PARAM DESCR
 */
function animateClick(parent_event) {
  trackClick(parent_event)

  dynamicPulseClasses.value += ' pulse--active'

  setTimeout(() => {
    dynamicPulseClasses.value = 'pulse'
  }, PULSE_ANIMATION_DELAY);
}

export { dynamicPulseClasses, animateClick }