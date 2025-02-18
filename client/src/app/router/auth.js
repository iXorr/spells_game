import { ref } from 'vue'
import axios from 'axios'

export const isAuth = ref(false)

export async function checkAuth() {
  const token = localStorage.getItem('token')

  if (!token)
    return

  try {
    const response = await axios.get('http://localhost:3000/checkjwt', {
      headers: {
        Authorization: token
      }
    })

    isAuth.value = response.data.valid
  } catch (err) {
    console.error('Ошибка проверки токена: ', err)
    localStorage.removeItem('token')
  }
}