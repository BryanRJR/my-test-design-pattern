const express = require('express')
const app = express()
const PORT = 3000
const router = require("./routes")

console.log("=== here ===")

app.use(express.static('views/assets'))
// app.use("/styles", express.static(__dirname + 'views/styles'));
app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)

app.all("*", (req, res) => {
  res.send("404 Page Not Found")
})
app.listen(PORT, () => {
  console.log(`Run on port ${PORT}`)
})