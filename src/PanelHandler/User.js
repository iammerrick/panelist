import React from 'react';
import Observe from '../utils/Observe';
import Firebase from '../utils/Firebase';

class User extends React.Component {
  render() {
    return <p>{this.props.store.name}</p>
  }
}

User.observable = function(props) {
  return `users/${props.userId}`;
}

export default Observe(User);
