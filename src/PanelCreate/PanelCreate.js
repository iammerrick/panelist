import React from 'react';
import PanelActions from './PanelActions';

class PanelCreate extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      topic: ''
    };
  }

  handleClick() {
    PanelActions.create({
      topic: this.state.topic
    });
  }
  
  handleChange(e) {
    this.setState({
      topic: e.target.value
    });
  }

  render() {
    return (
      <div>
        <textarea onChange={this.handleChange.bind(this)} value={this.state.topic}></textarea>
        <a onClick={this.handleClick.bind(this)}>Create Panel</a>
      </div>
    );
  }
}

export default PanelCreate;
