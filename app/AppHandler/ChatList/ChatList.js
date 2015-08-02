import React from 'react';
import _ from 'lodash';
import Moment from './Moment';

export default class ChatList extends React.Component {
  render() {
    var messages = _.map(this.props.discussion, (discussion, key) => {
      return <div key={key}>{discussion.source} <Moment timeStamp={discussion.timeStamp}/></div>;
    });
    return (
      <div>
        {messages}
      </div>
    );
  }
}
