import Firebase from '../utils/Firebase';
import FB from 'firebase';

export default {
  create(id, payload) {
    Firebase.child('panels').child(id).child('messages').push({
      source: payload.source,
      userId: Firebase.getAuth().uid,
      timeStamp: FB.ServerValue.TIMESTAMP,
      type: 'MESSAGE'
    });
  },

  setLocked(id, value) {
    if (value) {
      this.createEvent(id, Firebase.getAuth().uid, `This panel has been locked.`);
    } else {
      this.createEvent(id, Firebase.getAuth().uid, `This panel has been unlocked.`);
    }

    Firebase.child('panels').child(id).child('isLocked').set(value);
  },

  removeMessage(id, messageId) {
    Firebase.child('panels').child(id).child(`messages/${messageId}`).remove();
  },

  setMicrophone(panel, user, value) {
    Firebase.child(`panels/${panel}/microphones`).child(user).set(value);

    Firebase.child(`users/${user}`).once('value', (snapshot) => {
      if (value) {
        this.createEvent(panel, Firebase.getAuth().uid, `${snapshot.val().name} has been promoted to panelist.`);
      } else {
        this.createEvent(panel, Firebase.getAuth().uid, `${snapshot.val().name} has been demoted to viewer.`);
      }
    });
  },

  addPresence(panel, user, status) {
    Firebase.child(`panels/${panel}/presence`).child(user).onDisconnect().remove();
    Firebase.child(`panels/${panel}/presence`).child(user).set(status);

    Firebase.child(`users/${user}`).once('value', (snapshot) => {
      this.createEvent(panel, Firebase.getAuth().uid, `${snapshot.val().name} has entered the panel.`);
    });
  },

  createEvent(panel, user, event) {
    
    Firebase.child(`panels/${panel}`).once('value', (snapshot) => {
      if (snapshot.val().isLocked) return  null;
      Firebase.child(`panels/${panel}/messages`).push({
        source: event,
        userId: user,
        timeStamp: FB.ServerValue.TIMESTAMP,
        type: 'EVENT'
      });
    });
  }
}
