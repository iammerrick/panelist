var Firebase = require('firebase');
var appConstants = require('../constants/AppConstants');

var firebaseUtils = {
  main: new Firebase(appConstants.FIREBASE)
};

module.exports = firebaseUtils;
