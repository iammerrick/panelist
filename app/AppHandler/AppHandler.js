import React from 'react';
import ChatList from './ChatList/ChatList';
import CreateMessage from './CreateMessage/CreateMessage';

export default class AppHandler extends React.Component {
  render() {
    return (
      <div>
        <ChatList discussion={this.props.store.discussion} />
        <CreateMessage />
      </div>
    );
  }
}


