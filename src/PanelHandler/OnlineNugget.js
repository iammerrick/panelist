import React from 'react';
import Observe from '../utils/Observe'
import './OnlineNugget.css';

class OnlineNugget extends React.Component {
  render() {
    var online = this.props.store[this.props.userId]
    return online ? <div className='OnlineNugget'></div> : null;
  }
}

OnlineNugget.observable = (props) => {
  return `panels/${props.panelId}/presence`;
}

export default Observe(OnlineNugget);
