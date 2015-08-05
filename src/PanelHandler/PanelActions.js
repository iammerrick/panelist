import Firebase from '../utils/Firebase';
import FB from 'firebase';

var typing = false;

export default {
  remove(panel) {
    Firebase.child('panels').child(panel).remove();
  },

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
    var ref = Firebase.child('panels').child(id).child(`messages/${messageId}`);
    ref.once('value', (snapshot) => {
      var message = snapshot.val();
      if (message.type === 'EVENT') {
        ref.remove();
      } else {
        message.source = 'This message has been deleted.';
        message.type = 'EVENT';
        ref.set(message);
      }
    });
  },

  setMicrophone(panel, user, value) {
    Firebase.child(`panels/${panel}/microphones`).child(user).set(value);
    Firebase.child(`users-panels/${Firebase.getAuth().uid}/panelist/${panel}`).set(value);

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
      if (snapshot.val().isLocked && event !== 'This panel has been unlocked.') return  null;
      Firebase.child(`panels/${panel}/messages`).push({
        source: event,
        userId: user,
        timeStamp: FB.ServerValue.TIMESTAMP,
        type: 'EVENT'
      });
    });
  },

  startTyping(panel) {
    if (!typing) {
      var user = Firebase.getAuth().uid;
      Firebase.child(`panels/${panel}/typing`).child(user).set(true);
      Firebase.child(`panels/${panel}/typing`).child(user).onDisconnect().remove();
      typing = true;
    }
  },

  stopTyping(panel) {
    if (typing) {
      Firebase.child(`panels/${panel}/typing`).child(Firebase.getAuth().uid).set(false);
      typing = false;
    }
  }
}
