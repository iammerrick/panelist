import React from 'react';

class DashboardHandler extends React.Component {
  render() {
    return (
      <div>
        Dashboard
        <a href="/panel/create">Create Panel</a>
        <a href="/logout">Logout</a>
      </div>
    );
  }
}

export default DashboardHandler;
