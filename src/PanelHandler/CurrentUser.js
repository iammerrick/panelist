import React from 'react';
import Observe from '../utils/Observe';
import Firebase from '../utils/Firebase';

class CurrentUser extends React.Component {
  render() {
    return <p>{this.props.store.name}</p>
  }
}

CurrentUser.observable = function(props) {
  return `users/${Firebase.getAuth().uid}`;
}

export default Observe(CurrentUser);
