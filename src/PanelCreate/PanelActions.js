import Firebase from '../utils/Firebase';
import URL from '../utils/URL';

export default {
  create(payload) {
    var id = Firebase.child('panels').push(payload);     
    id.child('microphones').child(Firebase.getAuth().uid).set(true)
    URL.redirect(`/panel/${id.key()}`);
  }
}
