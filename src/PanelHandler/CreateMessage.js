import React from 'react';
import PanelActions from './PanelActions';
import Observe from '../utils/Observe';

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
      <div>
        <textarea readOnly={this.props.store.isLocked} onChange={this.handleChange.bind(this)} onKeyUp={this.handleKeyUp.bind(this)} value={this.state.value}></textarea>
        <button disabled={this.props.store.isLocked} onClick={this.handleSubmitClick.bind(this)}>Submit</button>
      </div>
    );
  }
}

CreateMessage.observable = (props) => {
  return `panels/${props.panelId}`;
}

export default Observe(CreateMessage);
