import { checks } from "../store/validateChecks"
import { warnInfo, warnMsg, confirmPassword, password, login} from "../store/userData"

function defineIsValid(inputData, isPassword) {
  warnInfo.value = []

  let checkDepth = isPassword ? checks.length: checks.length-2

  for (let i = 0; i < checkDepth; i++) {
    if (checks[i].regExp.test(inputData))
      continue
    else
      warnInfo.value.push(checks[i].errMsg)
  }

  return (warnInfo.value.length === 0) ? true : false
}

export function checkRegister() {
  warnMsg.value = null

  if (!defineIsValid(login.value, false))
    warnMsg.value = 'проблема с логином'
  else if (!defineIsValid(password.value, true))
    warnMsg.value = 'проблема с паролем'
  else if (confirmPassword.value != password.value)
    warnMsg.value = 'пароли не совпадают'
  else
    return true
}