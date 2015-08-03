import React from 'react';
import PanelActions from './PanelActions';

class PanelCreate extends React.Component {
  handleClick() {
    PanelActions.create({
      // populate from form here...
    });
  }

  render() {
    return (
      <div>
      
      </div>
    );
  }
}

export default PanelCreate;
