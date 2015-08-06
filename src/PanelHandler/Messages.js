import React from 'react';
import cx from 'react-classset';
import Message from './Message';
import User from './User';
import Observe from '../utils/Observe';
import PanelActions from './PanelActions';
import Firebase from '../utils/Firebase';
import _ from 'lodash';
import Moment from './Moment';
import './Messages.css';
import MessageParser from './MessageParser';

class Messages extends React.Component {

  componentWillUpdate() {
    var node = React.findDOMNode(this);
    this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
  }

  componentDidUpdate() {
    if (this.shouldScrollBottom) {
      var node = React.findDOMNode(this);
      node.scrollTop = node.scrollHeight;
    }
  }

  componentDidMount() {
    var node = React.findDOMNode(this);
    node.scrollTop = node.scrollHeight;
  }


  render() {
    var uid = Firebase.getAuth().uid;
    var messages = _.map(this.props.store.messages, (message, key) => {
      var canDelete = message.userId === uid && !this.props.store.isLocked;
      return <Message panelId={this.props.panelId} message={message} canDelete={canDelete} key={key} messageId={key} />
    });
    return <div className={`Messages ${this.props.className}`}>{messages.length > 0 ? messages : <div className='Messages__Helper'>Sure is quiet in here, try typing something below...</div>}</div>
  }
}

Messages.observable = function(props) {
  return `panels/${props.panelId}`;
}

export default Observe(Messages);
