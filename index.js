const express = require("express")
const app = express()
const main = process.cwd() + '/public'
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.sendFile(main + "/index.html")
})

app.get("/home", (req, res) => {
  res.sendFile(main + "/index.html")
})

app.get("/faq", (req, res) => {
  res.sendFile(main + "/faq.html")
})

app.get("/invite", (req, res) => {
  res.sendFile(main + "/invite.html")
})

app.get("/nitro", (req, res) => {
  res.sendFile(main + "/nitro.html")
})

app.get("/blooket", (req, res) => {
  res.sendFile(main + "/secret.html")
})

app.get("/pug", (req, res) => {
  res.redirect("https://puginarug.tekno-the-bot.repl.co")
})

app.listen(9999, () => {
  console.log("web is up!")
})