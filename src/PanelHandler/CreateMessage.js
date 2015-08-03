import React from 'react';
import PanelActions from './PanelActions';

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
    PanelActions.create(this.props.panelId, {
      source: this.state.value
    });

    this.setState({
      value: ''
    });
  }

  render() {
    return (
      <div>
        <textarea onChange={this.handleChange.bind(this)} value={this.state.value}></textarea>
        <a onClick={this.handleSubmitClick.bind(this)}>Submit</a>
      </div>
    );
  }
}

export default CreateMessage;