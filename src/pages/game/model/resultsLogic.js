import { useRouter } from 'vue-router'
import { resetAll } from '@entities/gameStates'
import { sendResults } from '../api/sendResults'  

export function useResultsLogic() {
  const router = useRouter()

  function resetAndReturn() {
    resetAll()
    router.push('/')
  }
  
  function sendAndReturn() {
    sendResults()
    resetAndReturn()
  }

  return {
    resetAndReturn,
    sendAndReturn
  }
}