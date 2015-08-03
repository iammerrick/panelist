import Firebase from '../utils/Firebase';

export default {

  addPresence(panel, user, status) {
      Firebase.child(`panels/${panel}/presence`).child(user).onDisconnect().remove();
      Firebase.child(`panels/${panel}/presence`).child(user).set(status);
  }
}
