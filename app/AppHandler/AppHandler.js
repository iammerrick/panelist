import React from 'react';
import ChatList from './ChatList/ChatList';

export default class AppHandler extends React.Component {
  render() {
    return <ChatList discussion={this.props.store.discussion} />;
  }
}


