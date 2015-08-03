import React from 'react';
import Observe from '../utils/Observe';
import PanelListItem from './PanelListItem';
import Firebase from '../utils/Firebase';
import './DashboardHandler.css'

class DashboardHandler extends React.Component {
  render() {
    var list = _.map(this.props.store, (panel) => {
      return <PanelListItem panelId={panel} key={panel} />
    });

    return (
      <div className='DashboardHandler'>
        <a href="/logout" className='DashboardHandler__Logout'>Logout</a>
  
        <div className='PanelList'>
          {list}
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
