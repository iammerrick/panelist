import Firebase from '../utils/Firebase';

export default {
  create(id, payload) {
    Firebase.child('panels').child(id).child('messages').push({
      source: payload.source,
      userId: Firebase.getAuth().uid
    });
  }
}
