import React from 'react';
import './NavigationBar.css';

class NavigationBar extends React.Component {
  render() {
    return (
      <div className='NavigationBar'>
        <div className='NavigationBar__Icon'>
          <a href='/panel/create' className='NavigationBar__PlusIcon'>
            <i className='icon-plus'></i>
          </a>
        </div>
        <div className='NavigationBar__Icon'>
          <a href='/dashboard' className='NavigationBar__ListIcon'>
            <i className='icon-list'></i>
          </a>
        </div>
        <div className='NavigationBar__Icon'>
          <a href='/logout' className='NavigationBar__LogoutIcon'>
            <i className='icon-logout'></i>
          </a>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
