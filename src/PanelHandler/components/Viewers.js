import React from 'react';
import UserList from './UserList';

class Viewers extends React.Component {
  render() {
    var panelists = [];
    for (var key in this.props.panel.microphones) {
      if (this.props.panel.microphones[key]) {
        panelists.push(key);
      }
    }
    var presence = _.keys(this.props.panel.presence);
    var viewers = _.intersection(presence, _.xor(presence, panelists));

    return (
      <UserList
        title={`Viewers (${viewers.length})`}
        description="A viewer is an observer of the conversation. They aren't able to engage in the conversation unless they are promoted to a panelist by the facilitator."
        userIds={viewers} 
        panelId={this.props.panelId}
        />
    )
  }
}

export default Viewers;
