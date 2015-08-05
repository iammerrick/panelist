import React from 'react';
import Users from '../Users';
import ProTip from '../ProTip';

class UserList extends React.Component {
  render() {
    return (
      <div>
        <div className='PanelHandler__Title'>
          <div>
            {this.props.title}
          </div>
          <ProTip>{this.props.description}</ProTip>
        </div>
        <Users userIds={this.props.userIds} panelId={this.props.panelId} />
      </div>
    )
    
  }
}

export default UserList;
