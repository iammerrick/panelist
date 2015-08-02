var express = require('express');
var router = express.Router();
var uuid = require('uuid');
var FirebaseUtils = require('../universal/utils/FirebaseUtils');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/new', function(req, res, next) {

  var panel = {
    discussions: [],
    name: 'Untitled'
  };

  var id = FirebaseUtils.main.push(panel);

  res.redirect('/panel/'+id.name());
});

router.get('/panel/:id', function(req, res, next) {
 res.render('app', {
   panel: req.params.id
 }); 
});

module.exports = router;
