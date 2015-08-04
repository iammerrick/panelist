import React from 'react';
import NavigationBar from './NavigationBar';
import './AppHandler.css';
import 'normalize.css/normalize.css'

export default class AppHandler extends React.Component {
  render() {
    return (
      <div className='AppHandler'>
        <div className='AppHandler__Navigation'>
          <NavigationBar />
        </div>
        <div className='AppHandler__Viewport'>
          {this.props.children}
        </div>
      </div>
    );
  }
}


