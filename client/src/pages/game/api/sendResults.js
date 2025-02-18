import axios from 'axios'
import { collectedDiamonds, chosenDifficulty, userLogin } from '@entities/gameStates'

export function sendResults() {
  axios.post('http://localhost:3000/recordRatings', {
    collectedDiamonds : collectedDiamonds.value,
    chosenDifficulty : chosenDifficulty.value,
    userLogin : userLogin.value
  })
  .then(res => console.log(res))
  .catch(err => console.error(err.message))
}