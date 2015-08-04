import React from 'react';
import User from './User';
import Observe from '../utils/Observe';
import PanelActions from './PanelActions';
import Firebase from '../utils/Firebase';
import _ from 'lodash';
import Moment from './Moment';
import './Messages.css';

class Messages extends React.Component {

  componentWillUpdate() {
    var node = React.findDOMNode(this);
    this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
  }

  componentDidUpdate() {
    if (this.shouldScrollBottom) {
      var node = React.findDOMNode(this);
      node.scrollTop = node.scrollHeight
    }
  }

  handleRemoveClick(key) {
    PanelActions.removeMessage(this.props.panelId, key);
  }

  render() {
    var uid = Firebase.getAuth().uid;
    var messages = _.map(this.props.store.messages, (message, key) => {
      var canDelete = message.userId === uid && !this.props.store.isLocked;
      return (
        <div key={key} className='Message'>
          <div className='MessageMeta'>
            <div className='MessageMeta__Username'>
              <User panelId={this.props.panelId} userId={message.userId} />
            </div>
            <div className='MessageMeta__Timestamp'>
              <Moment timeStamp={message.timeStamp} />
              { canDelete ? <span className="MessageMeta__RemoveIcon" onClick={this.handleRemoveClick.bind(this, key)}><i className='icon-remove'></i></span> : null}
            </div>
          </div>
          <div className='Message__Source'>
            {message.source}
          </div>
        </div>
      );
    });
    return <div className='Messages'>{messages}</div>
  }
}

Messages.observable = function(props) {
  return `panels/${props.panelId}`;
}

export default Observe(Messages);
