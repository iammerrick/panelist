import React from 'react';
import moment from 'moment';

class Moment extends React.Component {
  render() {
    var label = moment(this.props.timeStamp).format('MMMM Do YYYY, h:mm a');
    return <span {...this.props}>{label}</span>
  }
}

export default Moment;
