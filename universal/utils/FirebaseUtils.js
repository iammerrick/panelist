var Firebase = require('firebase');
var appConstants = require('../constants/AppConstants');

var firebaseUtils = {
  main: new Firebase(appConstants.FIREBASE),
  panel: function(panelId) {
    return new Firebase(appConstants.FIREBASE+'/'+panelId)
  }
};

module.exports = firebaseUtils;
