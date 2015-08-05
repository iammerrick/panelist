import React from 'react';
import UserList from './UserList';

class Facilitator extends React.Component {
  render() {

    var facilitator = this.props.panel.facilitator;

    return (
      <UserList 
        title='Facilitator'
        description='The facilitator is running the show, he promotes viewers to panelists and locks the conversation.' 
        userIds={[facilitator]}
        panelId={this.props.panelId}
      />
    )
  }
}

export default Facilitator;
