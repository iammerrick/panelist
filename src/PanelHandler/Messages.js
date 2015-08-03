import React from 'react';
import User from './User';
import Observe from '../utils/Observe';
import PanelActions from './PanelActions';
import Firebase from '../utils/Firebase';
import _ from 'lodash';
import Moment from './Moment';
import './Messages.css';

class Messages extends React.Component {
  handleRemoveClick(key) {
    PanelActions.removeMessage(this.props.panelId, key);
  }

  render() {
    var uid = Firebase.getAuth().uid;
    var messages = _.map(this.props.store.messages, (message, key) => {
      return (
        <div key={key} className='Message'>
          <div className='MessageMeta'>
            <div className='MessageMeta__Username'>
              <User userId={message.userId} />
            </div>
            <div className='MessageMeta__Timestamp'>
              <Moment timeStamp={message.timeStamp} />
              { message.userId === uid ? <span className="MessageMeta__RemoveIcon" onClick={this.handleRemoveClick.bind(this, key)}><i className='icon-remove'></i></span> : null}
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
  return `panels/${props.panelId}`;
}

export default Observe(Messages);
