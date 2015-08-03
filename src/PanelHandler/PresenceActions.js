import Firebase from '../utils/Firebase';

export default {
  setMicrophone(panel, user, value) {
    Firebase.child(`panels/${panel}/microphones`).child(user).set(value);
  },

  addPresence(panel, user, status) {
      Firebase.child(`panels/${panel}/presence`).child(user).onDisconnect().remove();
      Firebase.child(`panels/${panel}/presence`).child(user).set(status);
  }
}
