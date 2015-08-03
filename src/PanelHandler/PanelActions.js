import Firebase from '../utils/Firebase';
import FB from 'firebase';

export default {
  create(id, payload) {
    Firebase.child('panels').child(id).child('messages').push({
      source: payload.source,
      userId: Firebase.getAuth().uid,
      timeStamp: FB.ServerValue.TIMESTAMP
    });
  }
}
