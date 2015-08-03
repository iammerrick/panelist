import React from 'react';
import Observe from '../utils/Observe';

class PanelListItem extends React.Component {
  render() {
    var viewers = Object.keys(this.props.store.presence || {}).length;
    var panelists = Object.keys(this.props.store.microphones || {}).length;

    return (
      <a href={`/panel/${this.props.panelId}`} className='PanelListItem'>
        <span>
          {this.props.store.topic}
        </span>
        <span>
          {panelists} Panelist(s) - {viewers} Viewer(s)
        </span>
      </a>
    );
  }
}

PanelListItem.observable = (props) => {
  return `panels/${props.panelId}`;
}

export default Observe(PanelListItem);

