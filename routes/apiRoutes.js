var reservations = require('../data/reservationsData.js');
var tables = require('../data/tablesData.js');

module.exports = function(app) {
  //reservation JSON
  app.get('/api/reservations', function(req, res){
    res.json(reservations)
  })
  //tables JSON
  app.get('/api/tables', function(req, res){
    res.json(tables)
  })
  //POST
  app.post('/api/tables', function(req, res){
    if(tables.length < 8) {
      tables.push(req.body)
      res.json(true)
    } else {
      reservations.push(req.body)
      res.json(false)
    }
  })
}