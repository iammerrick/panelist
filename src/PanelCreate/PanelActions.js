import Firebase from '../utils/Firebase';
import URL from '../utils/URL';

export default {
  create(payload) {
    var id = Firebase.child('panels').push(payload);     
    URL.redirect(`/panel/${id.key()}`);
  }
}
