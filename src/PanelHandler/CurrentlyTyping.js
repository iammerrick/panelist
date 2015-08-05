import React from 'react';
import Observe from '../utils/Observe';
import Username from './Username';
import './CurrentlyTyping.css';

class CurrentlyTyping extends React.Component {
  render() {
    var isTyping = {};
    
    for (var key in this.props.store) {
      if (this.props.store[key]) {
        isTyping[key] = this.props.store[key];
      }
    }

    var users = _.map(isTyping, (user, key) => {
      return (
        <span key={key} className='CurrentlyTyping__Item'><Username userId={key} /> is typing...</span>
      );
    });
    return <div>{users}</div>;
  }
}

CurrentlyTyping.observable = (props) => {
  return `panels/${props.panelId}/typing`;
}

export default Observe(CurrentlyTyping);
