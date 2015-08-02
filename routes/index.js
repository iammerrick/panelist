var express = require('express');
var router = express.Router();
var uuid = require('uuid');
var FirebaseUtils = require('../universal/utils/FirebaseUtils');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/new', function(req, res, next) {
  var id = uuid();
  var panel = {};

  panel[id] = {
    discussion: []
  };

  FirebaseUtils.main.set(panel);

  res.redirect('/panel/'+id);
});

router.get('/panel/:id', function(req, res, next) {
 res.send(req.params.id); 
});

module.exports = router;
