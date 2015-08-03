import React from 'react';
import Firebase from '../utils/Firebase';
import User from './User';
import PanelActions from './PanelActions';
import Observe from '../utils/Observe';
import './Users.css';

class Users extends React.Component {
  handleUserClick(user) {
    if (this.props.store.facilitator === Firebase.getAuth().uid) {
      PanelActions.setMicrophone(this.props.panelId, user, !this.props.store.microphones[user]);
    }
  }

  render() {
    var users = this.props.userIds.map((id) => {
      return <div onClick={this.handleUserClick.bind(this, id)} key={id}><User userId={id} /></div>;
    });

    return (
      <div className='Users'>
        {users}
      </div>
    );
  }
}

Users.observable = (props) => {
  return `panels/${props.panelId}`
}

export default Observe(Users);
