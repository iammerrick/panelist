import React from 'react';
import PanelActions from '../PanelActions';
import Firebase from '../../utils/Firebase';

class Header extends React.Component {

  handleLockClick() {
    if (this.props.panel.facilitator === Firebase.getAuth().uid) {
      PanelActions.setLocked(this.props.panelId, !this.props.panel.isLocked);
    }
  }

  render() {
     
    return (
      <div {...this.props}>
        <div>
          <span className='PanelHandler__Header__Icon' onClick={this.handleLockClick.bind(this)}>{this.props.panel.isLocked ? <i className='icon-lock'></i> : <i className='icon-lock-open'></i>}</span>
        </div>
        <div className='Topic'>
          {this.props.panel.topic}
        </div>
      </div>
    );
  }
}

export default Header;
