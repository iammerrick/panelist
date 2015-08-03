import React from 'react';
import Firebase from '../utils/Firebase';
import Observe from '../utils/Observe';
import CurrentUser from './CurrentUser';

class PanelHandler extends React.Component {

  render() {
    return (
      <div>
        <CurrentUser />
        {this.props.store.topic}
      </div>
    );
  }
}

PanelHandler.observable = function(props) {
  return `panels/${props.panelId}`;
}

export default Observe(PanelHandler);
