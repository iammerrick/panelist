import React from 'react';
import _ from 'lodash';
import User from './User';
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
    Firebase.child(`panels/${this.props.panelId}/presence`).on('value', this.handleChange, this);
  }

  componentWillUnmount() {
    Firebase.child(`panels/${this.props.panelId}/presence`).off('value', this.handleChange, this);
    Firebase.child('/.info/connected').off('value', this.handleOnline, this);
  }

  handleChange(snapshot) {
    this.setState({
      users: snapshot.val()
    });
  }

  handleOnline(snapshot) {
    if (snapshot.val()) {
      Firebase.child(`panels/${this.props.panelId}/presence`).child(Firebase.getAuth().uid).onDisconnect().remove();
      Firebase.child(`panels/${this.props.panelId}/presence`).child(Firebase.getAuth().uid).set(snapshot.val());
    }
  }

  render() {
    var users = _.map(this.state.users, (user, key) => {
      return <User userId={key} key={key} />;
    });

    return (
      <div>
        {users} 
      </div>
    );
  }
}
export default Presence;
