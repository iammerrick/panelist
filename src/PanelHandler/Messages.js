import React from 'react';
import User from './User';
import Observe from '../utils/Observe';
import Firebase from '../utils/Firebase';
import _ from 'lodash';
import Moment from './Moment';
import './Messages.css';

class Messages extends React.Component {
  render() {
    var messages = _.map(this.props.store, (message, key) => {
      return (
        <div key={key} className='Message'>
          <div className='MessageMeta'>
            <div className='MessageMeta__Username'>
              <User userId={message.userId} />
            </div>
            <div className='MessageMeta__Timestamp'>
              <Moment timeStamp={message.timeStamp} />
            </div>
          </div>
          <div className='Message__Source'>
            {message.source}
          </div>
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
