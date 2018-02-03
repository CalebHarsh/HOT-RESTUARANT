const reservations = require('../data/reservationsData.js')

module.exports = function(app) {
  app.get("/api/reservations", function(req, res) {
    res.json(reservations);
  });
}