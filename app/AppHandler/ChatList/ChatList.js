import React from 'react';
import _ from 'lodash';

export default class ChatList extends React.Component {
  render() {
    var messages = _.map(this.props.discussion, (discussion, key) => {
      return <div key={key}>{discussion.source}</div>;
    });
    return (
      <div>
        {messages}
      </div>
    );
  }
}
