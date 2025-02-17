import { ref } from 'vue'

const coords = ref({ x: 0, y: 0 })

function trackClick(parent_event) {
  coords.value.x = parent_event.clientX
  coords.value.y = parent_event.clientY
}

export { coords, trackClick }