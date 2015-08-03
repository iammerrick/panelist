import React from 'react';
import _ from 'lodash';
import Firebase from '../utils/Firebase';

class Presence extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
    };
  }
  componentWillMount() {
    var online = Firebase.child('/.info/connected');
    online.on('value', this.handleOnline, this);
  }

  componentWillUnmount() {
    Firebase.child('/.info/connected').off('value', this.handleOnline, this);

  }

  handleOnline(snapshot) {
    if (snapshot.val()) {
      Firebase.child(`panels/${this.props.panelId}/presence`).child(Firebase.getAuth().uid).onDisconnect().remove();
      Firebase.child(`panels/${this.props.panelId}/presence`).child(Firebase.getAuth().uid).set(snapshot.val());
    }
  }

  render() {
    var users = _.map(this.state.users, (user, key) => {
      return <div>{user.name}</div>;
    });
    return (
      <div>
        {users} 
      </div>
    );
  }
}

export default Presence;
