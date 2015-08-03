import React from 'react';
import PanelActions from './PanelActions';
import Observe from '../utils/Observe';
import './CreateMessage.css'

class CreateMessage extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: ''
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmitClick() {
    if(this.state.value.replace(/\s/g, '').length) {
      PanelActions.create(this.props.panelId, {
        source: this.state.value
      });
    }

    this.setState({
      value: ''
    });
  }

  handleKeyUp(e) {
    if (e.keyCode === 13 && !this.props.store.isLocked) {
      this.handleSubmitClick();
    }
  }

  render() {
    return (
      <div className='CreateMessage'>
        <div className='CreateMessage__Input'>
          <a className='CreateMessage__Submit' disabled={this.props.store.isLocked} onClick={this.handleSubmitClick.bind(this)}><i className='icon-plus' /></a>
          <input readOnly={this.props.store.isLocked} onKeyUp={this.handleKeyUp.bind(this)} className='CreateMessage__Input__Textarea' onChange={this.handleChange.bind(this)} value={this.state.value}/>
        </div>
      </div>
    );
  }
}

CreateMessage.observable = (props) => {
  return `panels/${props.panelId}`;
}

export default Observe(CreateMessage);
