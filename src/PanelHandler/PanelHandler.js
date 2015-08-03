import React from 'react';
import Firebase from '../utils/Firebase';
import Observe from '../utils/Observe';
import PresenceActions from './PresenceActions';
import User from './User';
import Users from './Users';
import CreateMessage from './CreateMessage';
import Messages from './Messages';
import PanelActions from './PanelActions';
import './PanelHandler.css'

class PanelHandler extends React.Component {

  componentWillMount() {
    var online = Firebase.child('/.info/connected');
    online.on('value', this.handleOnline, this);
  }

  componentWillUnmount() {
    Firebase.child('/.info/connected').off('value', this.handleOnline, this);
  }

  handleOnline(snapshot) {
    var status = snapshot.val();
    if (status) {
      PresenceActions.addPresence(this.props.panelId, Firebase.getAuth().uid, status);
    }
  }

  handleLockClick() {
    if (this.props.store.facilitator === Firebase.getAuth().uid) {
      PanelActions.setLocked(this.props.panelId, !this.props.store.isLocked);
    }
  }

  handleShareIntent() {
    window.open(
      `https://twitter.com/intent/tweet?url=${window.location}&text=${this.props.store.topic}&via=panelistio`,
      'Share via Panelist.io', 
      'width=600,height=300,scrollbars=no,location=no,toolbar=no'
    );
  }

  render() {

    function hasMicrophone(user, panel) {
      return panel.microphones[user];
    }

    var facilitator = this.props.store.facilitator;

    var panelists = [];
    for (var key in this.props.store.microphones) {
      if (this.props.store.microphones[key]) {
        panelists.push(key);
      }
    }
   var viewers = _.xor(_.keys(this.props.store.presence), panelists);

    return (
      <div className='PanelHandler'>
        <div className='PanelHandler__Sidebar'>
          <a href='/panel/create' className='PanelHandler__Create'>
            <i className='icon-plus'></i> <span className='PanelHandler__Create__Text'>Create a Panel</span>
          </a>
          <div className='PanelHandler__Title'>
            Facilitator
          </div>
          <Users userIds={[facilitator]} panelId={this.props.panelId} />
          <div className='PanelHandler__Title'>
            Panelists 
          </div>
          <Users userIds={panelists} panelId={this.props.panelId} />
          <div className='PanelHandler__Title'>
            Viewers 
          </div>
          <Users userIds={viewers} panelId={this.props.panelId} />
        </div>
        <div className='PanelHandler__Body'>
          <div className='PanelHandler__Header'>
            <a onClick={this.handleShareIntent.bind(this)} className='PanelHandler__Header__FirstIcon'><i className='icon-twitter'></i></a>
            <span onClick={this.handleLockClick.bind(this)}>{this.props.store.isLocked ? <i className='icon-lock'></i> : <i className='icon-unlocked'></i>}</span>
          </div>
          <div className='Topic'>
            {this.props.store.topic}
          </div>
          <div className='PanelHandler__Messages'>
            <Messages panelId={this.props.panelId} />
            { hasMicrophone(Firebase.getAuth().uid, this.props.store) ? <CreateMessage panelId={this.props.panelId} /> : null }
          </div>
        </div>
      </div>
    );
  }
}

PanelHandler.observable = function(props) {
  return `panels/${props.panelId}`;
}

export default Observe(PanelHandler);
