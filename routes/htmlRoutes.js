var path = require("path")
app.get("/", (req, res) => {
  res.sendFile(path.joinFile(__dirname))
})