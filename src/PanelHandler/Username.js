import React from 'react';
import Observe from '../utils/Observe';

class Username extends React.Component {
  render() {
    return <span>{this.props.store.name}</span>;
  }
}

Username.observable = (props) => {
  return `users/${props.userId}`;
}

export default Observe(Username);
