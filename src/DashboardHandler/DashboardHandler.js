import React from 'react';
import Observe from '../utils/Observe';
import PanelListItem from './PanelListItem';
import Firebase from '../utils/Firebase';
import PanelList from './PanelList';
import './DashboardHandler.css'

class DashboardHandler extends React.Component {
  render() {
    function getPanels(panels) {
      var filtered = [];
      for (var key in panels) {
        if (panels[key]) {
          filtered.push(key);
        }
      }
      return filtered;
    }

    return (
      <div className='DashboardHandler'>
        <div className='PanelList'>
          <div className='PanelList__Title'>
            Facilitator
          </div>
          <PanelList panels={getPanels(this.props.store.facilitator)} />
          <div className='PanelList__Title'>
            Panelist 
          </div>
          <PanelList panels={getPanels(this.props.store.panelist)} />
          <a href='/panel/create' className='DashboardHandler__Create'><i className='icon-plus DashboardHandler__Create__Icon' /> Create Panel</a>
        </div>
      </div>
    );
  }
}
DashboardHandler.observable = (props) => {
  return `users-panels/${Firebase.getAuth().uid}`;
}

export default Observe(DashboardHandler);
