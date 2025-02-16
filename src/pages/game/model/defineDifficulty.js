import { chosenDifficulty } from '@entities/gameStates'

export function defineDifficulty() {
  let difficulty

  switch (chosenDifficulty.value) {
    case 'easy':
      difficulty = 5
      break
    
    case 'normal':
      difficulty = 10
      break

    case 'hard':
      difficulty = 15
      break

    case 'impossible':
      difficulty = 20
      break
  }

  return difficulty
}