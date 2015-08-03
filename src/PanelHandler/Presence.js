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
    Firebase.child(`panels/${this.props.panelId}`).on('value', this.handleChange, this);
  }

  componentWillUnmount() {
    Firebase.child(`panels/${this.props.panelId}`).off('value', this.handleChange, this);
    Firebase.child('/.info/connected').off('value', this.handleOnline, this);
  }

  handleChange(snapshot) {
    this.setState({
      panel: snapshot.val()
    });
  }

  handleOnline(snapshot) {
    if (snapshot.val()) {
      Firebase.child(`panels/${this.props.panelId}/presence`).child(Firebase.getAuth().uid).onDisconnect().remove();
      Firebase.child(`panels/${this.props.panelId}/presence`).child(Firebase.getAuth().uid).set(snapshot.val());
    }
  }

  handleUserClick(key) {
    if (this.state.panel.facilitator === Firebase.getAuth().uid) {
      Firebase.child(`panels/${this.props.panelId}/microphones`).child(key).set(true);
    }
  }

  render() {
    var users = _.map(this.state.panel.presence, (user, key) => {
      return (
        <div onClick={this.handleUserClick.bind(this, key)} key={key}>
          <User userId={key} />
        </div>
      );
    });

    return (
      <div>
        {users} 
      </div>
    );
  }
}
export default Presence;
