export function translateDifficulty (arr) {
  return arr.map(item => {
    if (item.chosenDifficulty == 'easy') {
      item.chosenDifficulty = 'Легко'
    }

    if (item.chosenDifficulty == 'normal') {
      item.chosenDifficulty = 'Нормально'
    }

    if (item.chosenDifficulty == 'hard') {
      item.chosenDifficulty = 'Сложно'
    }

    if (item.chosenDifficulty == 'impossible') {
      item.chosenDifficulty = 'Пипяу'
    }

    return item
  })
}