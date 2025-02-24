export function logout() {
  setTimeout(() => {
    localStorage.clear()
    window.location.reload()
  }, 500)
}