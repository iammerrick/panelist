import React from 'react';
import Firebase from '../utils/Firebase';
import ProTip from './ProTip';
import Observe from '../utils/Observe';
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
      PanelActions.addPresence(this.props.panelId, Firebase.getAuth().uid, status);
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
  var presence = _.keys(this.props.store.presence);
  var viewers = _.intersection(presence, _.xor(presence, panelists));
    return (
      <div className='PanelHandler'>
        <div className='PanelHandler__Sidebar'>
          <a href='/panel/create' className='PanelHandler__Create'>
            <i className='icon-plus'></i> <span className='PanelHandler__Create__Text'>Create a Panel</span>
          </a>
          <div className='PanelHandler__Title'>
            <div>
              Facilitator
            </div>
            <ProTip>The facilitator is running the show, he promotes viewers to panelists and locks the conversation.</ProTip>
          </div>
          <Users userIds={[facilitator]} panelId={this.props.panelId} />
          <div className='PanelHandler__Title'>
            <div>
              Panelists ({panelists.length})
            </div>
            <ProTip>A panelist is someone with a microphone. They are permitted to engage in the conversation.</ProTip>
          </div>
          <Users userIds={panelists} panelId={this.props.panelId} />
          <div className='PanelHandler__Title'>
            <div>
              Viewers ({viewers.length})
            </div>
            <ProTip>A viewer is an observer of the conversation. They aren't able to engage in the conversation unless they are promoted to a panelist by the facilitator.</ProTip>
          </div>
          <Users userIds={viewers} panelId={this.props.panelId} />
          <a href='/dashboard' className='PanelHandler__Dashboard'>See all your panels...</a>
        </div>
        <div className='PanelHandler__Body'>
          <div className='PanelHandler__Header'>
            <div>
              <a>Show Users</a>
              <a onClick={this.handleShareIntent.bind(this)} className='PanelHandler__Header__FirstIcon'><i className='icon-twitter'></i></a>
              <span className='PanelHandler__Header__SecondIcon' onClick={this.handleLockClick.bind(this)}>{this.props.store.isLocked ? <i className='icon-lock'></i> : <i className='icon-lock-open'></i>}</span>
            </div>
            <div className='Topic'>
              {this.props.store.topic}
            </div>
          </div>
          <div className='PanelHandler__Messages'>
            <Messages panelId={this.props.panelId} />
            <CreateMessage panelId={this.props.panelId} />
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
