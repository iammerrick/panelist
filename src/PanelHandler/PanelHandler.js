import React from 'react';
import Firebase from '../utils/Firebase';
import cx from 'react-classset';
import Facilitator from './components/Facilitator';
import Panelists from './components/Panelists';
import Viewers from './components/Viewers';
import UserList from './components/UserList';
import Share from './components/Share';
import CurrentlyTyping from './CurrentlyTyping';
import Header from './components/Header';
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

  render() {
    return (
      <div className='PanelHandler'>
        <div className='PanelHandler__Sidebar'>
          <Share panel={this.props.store} />
          <Facilitator panelId={this.props.panelId} panel={this.props.store} />
          <Panelists panelId={this.props.panelId} panel={this.props.store} />
          <Viewers panelId={this.props.panelId} panel={this.props.store} />
        </div>
        <div className='PanelHandler__Body'>
          <Header className='PanelHandler__Header' panelId={this.props.panelId} panel={this.props.store} />
          <Messages className='PanelHandler__Messages' panelId={this.props.panelId} />
          <div className='PanelHandler__CreateMessage'>
            <CreateMessage panelId={this.props.panelId} />
          </div>
          <div className='PanelHandler__Typing'>
            <CurrentlyTyping panelId={this.props.panelId} />
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
