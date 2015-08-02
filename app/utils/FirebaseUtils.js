var Firebase = require('firebase');
var appConstants = require('../constants/appConstants');

var firebaseUtils = {
  main: function() {
    return new Firebase(appConstants.FIREBASE)
  }
};

module.exports = firebaseUtils;
