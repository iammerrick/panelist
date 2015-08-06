import React from 'react';
import UserList from './UserList';

class Panelists extends React.Component {
  render() {

    var panelists = [];
    for (var key in this.props.panel.microphones) {
      if (this.props.panel.microphones[key]) {
        panelists.push(key);
      }
    }

    return (
      <UserList
        title={`Panelists (${panelists.length})`}
        description='A panelist is someone with a microphone. They are permitted to engage in the conversation.'
        userIds={panelists} 
        panelId={this.props.panelId}
        panel={this.props.panel}
      />
    )
  }
}

export default Panelists;
