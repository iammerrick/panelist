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
    var self = this;

    function isPanelist(userId) {
      return self.props.store.microphones[userId];
    }

    function toggler(userId) {
      return isPanelist(userId) ? <i className='icon-remove Users__IconRemove'/> : <i className='icon-plus Users__IconPlus'/>;
    }

    var users = this.props.userIds.map((id) => {
      return (
        <div className='Users__Row' style={{cursor: this.props.store.facilitator === Firebase.getAuth().uid ? 'pointer' : 'default'}} onClick={this.handleUserClick.bind(this, id)} key={id}>
          <User onlineIndicator={true} userId={id} panelId={this.props.panelId} />{this.props.store.facilitator === Firebase.getAuth().uid ? toggler(id) : null}
        </div>
      )
    });

    return (
      <div className='Users'>
        {users.length > 0 ? users : <div className='Users_Row'>No People</div>}
      </div>
    );
  }
}

Users.observable = (props) => {
  return `panels/${props.panelId}`
}

export default Observe(Users);
