import Firebase from '../utils/Firebase';
import URL from '../utils/URL';
import _ from 'lodash';

export default {
  create(payload) {
    var id = Firebase.child('panels').push(_.extend(payload, { facilitator: Firebase.getAuth().uid} ));
    id.child('microphones').child(Firebase.getAuth().uid).set(true);
    URL.redirect(`/panel/${id.key()}`);
  }
}
