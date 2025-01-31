import { ref } from 'vue'

const coords = ref({ x: -100, y: -100 })

function resetCoords() {
  coords.value.x = -100
  coords.value.y = -100
}

function trackCoords(event) {
  coords.value.x = event.clientX
  coords.value.y = event.clientY

  setTimeout(resetCoords, 50);
}
 
export { coords, trackCoords }