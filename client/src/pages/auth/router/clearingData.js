import { 
  login, 
  password, 
  confirmPassword, 
  warnMsg, 
  warnInfo 
} from '../store/userData'

import { useRouter } from 'vue-router'

export function clearingData() {
  const router = useRouter()

  return router.beforeEach(() => {
    login.value = null
    password.value = null
    confirmPassword.value = null
    warnMsg.value = null
    warnInfo.value = null
  })
}