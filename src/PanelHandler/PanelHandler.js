import React from 'react';
import Firebase from '../utils/Firebase';
import Observe from '../utils/Observe';
import CurrentUser from './CurrentUser';
import CreateMessage from './CreateMessage';
import Messages from './Messages';
import './PanelHandler.css'

class PanelHandler extends React.Component {

  render() {
    return (
      <div>
        <CurrentUser />
        <div className='Topic'>
          {this.props.store.topic}
        </div>
        <Messages panelId={this.props.panelId} />
        <CreateMessage panelId={this.props.panelId} />
      </div>
    );
  }
}

PanelHandler.observable = function(props) {
  return `panels/${props.panelId}`;
}

export default Observe(PanelHandler);
