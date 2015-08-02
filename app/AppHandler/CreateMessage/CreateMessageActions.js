import Firebase from 'firebase';
var FirebaseDB = require('../../../universal/utils/FirebaseUtils').main.child(ENV.PANEL);
var CreateMessageActions = {
  save(message) {
    FirebaseDB.child('discussion').push({
      source: message,
      timeStamp: Firebase.ServerValue.TIMESTAMP
    })
  }
};

module.exports = CreateMessageActions;
