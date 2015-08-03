import React from 'react';
import User from './User';
import Observe from '../utils/Observe';
import Firebase from '../utils/Firebase';
import _ from 'lodash';

class Messages extends React.Component {
  render() {
    var messages = _.map(this.props.store, (message) => {
      return (
        <div>
          {message.source}
          <User userId={message.userId} />
        </div>
      );
    });
    return <div>{messages}</div>
  }
}

Messages.observable = function(props) {
  return `panels/${props.panelId}/messages`;
}

export default Observe(Messages);
