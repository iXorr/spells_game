import { ratings } from "../model/dataModel.js"

export async function recordRatings(req, res) {
  const { collectedDiamonds, chosenDifficulty, userLogin } = req.body

  const difficultyLevels = { easy: 1, normal: 2, hard: 3, impossible: 4 }

  let existingRecordIndex = ratings.findIndex(r => r.userLogin === userLogin)
  let newRecord = { collectedDiamonds, chosenDifficulty, userLogin }

  if (existingRecordIndex !== -1) {
    let existingRecord = ratings[existingRecordIndex];
    let existingDifficulty = difficultyLevels[existingRecord.chosenDifficulty]
    let newDifficulty = difficultyLevels[chosenDifficulty]
    
    if (
      newDifficulty > existingDifficulty ||
      collectedDiamonds > existingRecord.collectedDiamonds ||
      (collectedDiamonds === existingRecord.collectedDiamonds && newDifficulty > existingDifficulty)
    ) {
      ratings[existingRecordIndex] = newRecord
    }
  } else {
    ratings.push(newRecord)
  }

  res.status(200).send('Рейтинг обновлён')
}

export async function getRatings(req, res) {
  res.send(ratings)
}