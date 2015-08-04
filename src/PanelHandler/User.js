import React from 'react';
import Observe from '../utils/Observe';
import Firebase from '../utils/Firebase';
import OnlineNugget from './OnlineNugget';
import './User.css'

class User extends React.Component {
  render() {
    return (
      <div className='User'>
        <div className='User__Avatar'>
        {this.props.onlineIndicator ? <OnlineNugget panelId={this.props.panelId} userId={this.props.userId} /> : null }
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
