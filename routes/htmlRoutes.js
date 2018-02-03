<<<<<<< HEAD
//adding path package 
var path = require("path");

//routing

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    app.get("/reservations", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/reservations.html"));
    });
    app.get("/viewTables", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/viewTables.html"));
    });
};
=======
var path = require("path")
app.get("/", (req, res) => {
  res.sendFile(path.joinFile(__dirname))
})
>>>>>>> 33584d43809705b4be00cfa5c61244b86e3f2071
