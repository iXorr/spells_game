function getToken(login) {
  return jwt.sign({ login: login }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: '1h'
  })
}

function sendToken(response, login) {
  let token = getToken(login)
  response.status(201).json({ token: token, login: login })
}