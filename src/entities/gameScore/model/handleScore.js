import { ref } from 'vue'

export const gameScore = ref(0)

export function decreaseScore() {
  gameScore.value -= 5
}

export function increaseScore() {
  gameScore.value++
}