import React from 'react';
import Observe from '../utils/Observe';
import PanelActions from '../PanelHandler/PanelActions';

class PanelListItem extends React.Component {

  handleRemovePanel(e) {
    e.preventDefault();
    PanelActions.remove(this.props.panelId);
  }

  render() {
    var viewers = Object.keys(this.props.store.presence || {}).length;
    var panelists = Object.keys(this.props.store.microphones || {}).length;

    return (
      <a href={`/panel/${this.props.panelId}`} className='PanelListItem'>
        <span>{this.props.store.topic}</span>
        <div className='PanelListItem__Items'>
          <i className='PanelListItem__Remove icon-remove' onClick={this.handleRemovePanel.bind(this)}/>
          <span>
            {panelists} Panelist(s) - {viewers} Viewer(s)
          </span>
        </div>
      </a>
    );
  }
}

PanelListItem.observable = (props) => {
  return `panels/${props.panelId}`;
}

export default Observe(PanelListItem);

