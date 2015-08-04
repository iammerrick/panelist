import React from 'react';
import Tooltip from './Tooltip';
import './ProTip.css'

class ProTip extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      show: false
    };
  }

  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div className='ProTip' show={this.state.show} onClick={this.handleClick.bind(this)}>
        <Tooltip className='ProTip__Tip' show={this.state.show}>
          <i className='icon-information ProTip__Icon' />
          <div>{this.props.children}</div>
        </Tooltip>
      </div>
    );
  }
}

export default ProTip;
