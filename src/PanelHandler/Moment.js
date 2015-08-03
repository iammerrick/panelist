import React from 'react';
import moment from 'moment';

class Moment extends React.Component {
  render() {
    if(moment(this.props.timeStamp).isSame(moment(), 'day')) {
      var label = moment(this.props.timeStamp).format('h:mm a');
    } else {
      var label = moment(this.props.timeStamp).format('MMMM Do YYYY, h:mm a');
    }
    return <span {...this.props}>{label}</span>
  }
}

export default Moment;
