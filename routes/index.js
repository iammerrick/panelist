var express = require('express');
var router = express.Router();
var uuid = require('uuid');
var FirebaseUtils = require('../universal/utils/FirebaseUtils');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/new', function(req, res, next) {

  var panel = {
    name: 'Untitled'
  };


  var id = FirebaseUtils.main.push(panel);
  var discussions = id.child('discussion');
  discussions.push({
    source: 'Hello world!'
  });

  discussions.push({
    source: 'Goodbye world!'
  });

  res.redirect('/panel/'+id.name());
});

router.get('/panel/:id', function(req, res, next) {
 res.render('app', {
   panel: req.params.id
 }); 
});

module.exports = router;
