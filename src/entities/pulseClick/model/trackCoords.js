import { ref } from 'vue'

const coords = ref({ x: -100, y: -100 })

function trackCoords(event) {
  coords.value.x = event.clientX
  coords.value.y = event.clientY
}

export { coords, trackCoords }