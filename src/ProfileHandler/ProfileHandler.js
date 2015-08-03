import React from 'react';
import Observe from '../utils/Observe';

class ProfileHandler extends React.Component {
  render() {
    console.log(this.props.store);
    return (
      <div>
        {this.props.store.name}
      </div>
    );
  }
}

ProfileHandler.observable = (props) => {
  console.log(props);
  return `users/${props.userId}`;
}

export default Observe(ProfileHandler);
