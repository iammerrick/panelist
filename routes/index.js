var express = require('express');
var router = express.Router();
var uuid = require('uuid');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/new', function(req, res, next) {
  var id = uuid();
  // Create in db
  res.redirect('/panel/'+id);
});

router.get('/panel/:id', function(req, res, next) {
 res.send(req.params.id); 
});

module.exports = router;
