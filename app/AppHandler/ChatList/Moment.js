import React from 'react';
import moment from 'moment';

export default class Moment extends React.Component {
  render() {
    var label = moment(this.props.timeStamp).format('MMMM Do YYYY, h:mm a');
    return (
      <span>
      {label}
      </span>
    );
  }
}
