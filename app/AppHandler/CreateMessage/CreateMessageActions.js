var Firebase = require('../../../universal/utils/FirebaseUtils').panel(ENV.PANEL);
var CreateMessageActions = {
  save(message) {
    Firebase.child('discussion').push({
      source: message
    })
  }
};

module.exports = CreateMessageActions;
