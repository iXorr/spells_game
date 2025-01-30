import express from "express";

const app = express()
const root = import.meta.dirname + "\\dist"

app.use(express.static(root))

app.get('*', (req, res) => {
  res.sendFile(root + "\\index.html")
})

app.listen(3000, () => {
  console.log('...running!')
})