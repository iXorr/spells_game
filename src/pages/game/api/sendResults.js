import axios from 'axios'
import { collectedDiamonds, chosenDifficulty } from '@entities/gameStates'
import { USER_NAME, BACKEND_URL } from '@shared/config'

export function sendResults() {
  axios.post(`${BACKEND_URL}/recordRatings`, {
    collectedDiamonds : collectedDiamonds.value,
    chosenDifficulty : chosenDifficulty.value,
    userLogin : USER_NAME
  })
  .then(res => console.log(res))
  .catch(err => console.error(err.message))
}