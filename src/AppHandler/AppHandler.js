import React from 'react';
import './AppHandler.css';
import 'normalize.css/normalize.css'

export default class AppHandler extends React.Component {
  render() {
    return (
      <div className='AppHandler'>
        {this.props.children}
      </div>
    );
  }
}


