import React from 'react';
import Firebase from '../utils/Firebase';
import Observe from '../utils/Observe';
import User from './User';
import CreateMessage from './CreateMessage';
import Messages from './Messages';
import Presence from './Presence';
import PanelActions from './PanelActions';
import './PanelHandler.css'

class PanelHandler extends React.Component {

  handleLockClick() {
    if (this.props.store.facilitator === Firebase.getAuth().uid) {
      PanelActions.setLocked(this.props.panelId, !this.props.store.isLocked);
    }
  }

  render() {

    function hasMicrophone(user, panel) {
      return panel.microphones[user];
    }

    return (
      <div>
        <div className='PanelHandler__Header'>
          <User userId={Firebase.getAuth().uid}/>
        </div>
        <div className='Topic'>
          <div onClick={this.handleLockClick.bind(this)}>{this.props.store.isLocked ? 'Locked' : 'Unlocked'}</div>
          {this.props.store.topic}
        </div>
        <div className='PanelHandler__Body'>
          <div className='PanelHandler__Messages'>
            <Messages panelId={this.props.panelId} />
            { hasMicrophone(Firebase.getAuth().uid, this.props.store) ? <CreateMessage panelId={this.props.panelId} /> : null }
          </div>
          <div>
            <Presence panelId={this.props.panelId}/>
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
