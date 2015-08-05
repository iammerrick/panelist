import React from 'react';
import PanelListItem from './PanelListItem';

class PanelList extends React.Component {
  render() {
    var list = _.map(this.props.panels, (panel) => {
      return <PanelListItem panelId={panel} key={panel} />
    });

    return (
      <div className='PanelList'>
        {list}
      </div>
    );
  }
}

export default PanelList;
