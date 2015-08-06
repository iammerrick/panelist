import React from 'react';
import PanelActions from './PanelActions';
import User from './User';
import Moment from './Moment';
import MessageParser from './MessageParser';
import cx from 'react-classset';

class Message extends React.Component {

  shouldComponentUpdate(props) {
    return props.message.source !== this.props.message.source || props.panelId !== this.props.panelId;

  }

  handleRemoveClick(key) {
    PanelActions.removeMessage(this.props.panelId, this.props.messageId);
  }

  render() {
    var message = this.props.message;
    var classes = cx({
      'Message': true,
      'Message--Event': message.type === 'EVENT'
    });
    return (
      <div className={classes}>
        <div className='MessageMeta'>
          <div className='MessageMeta__Username'>
            <User panelId={this.props.panelId} userId={message.userId} />
          </div>
          <div className='MessageMeta__Timestamp'>
            <Moment timeStamp={message.timeStamp} />
            { this.props.canDelete ? <span className='MessageMeta__RemoveIcon' onClick={this.handleRemoveClick.bind(this, this.props.messageId)}><i className='icon-remove'></i></span> : null}
          </div>
        </div>
        <div className='Message__Source' dangerouslySetInnerHTML={{ __html: MessageParser(message.source)}} />
      </div>
    );
  }
}

export default Message;
