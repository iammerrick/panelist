import React from 'react';
import Observe from '../utils/Observe';
import Firebase from '../utils/Firebase';
import './User.css'

class User extends React.Component {
  render() {
    return (
      <div className='User'>
        <div>
          <img src={this.props.store.image} className='User__Image' />
        </div>
        <div className='User__Name'>
          {this.props.store.name}
        </div>
      </div>
    );
  }
}

User.observable = function(props) {
  return `users/${props.userId}`;
}

export default Observe(User);
