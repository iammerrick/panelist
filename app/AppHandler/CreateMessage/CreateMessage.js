import React from 'react';
import CreateMessageActions from './CreateMessageActions';

class CreateMessage extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: ''
    }
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit() {
    console.log(this.state.value);
    CreateMessageActions.save(this.state.value);
  }

  render() {
    return (
      <div>
        <textarea onChange={this.handleChange.bind(this)} value={this.state.value} />
        <a href="#" onClick={this.handleSubmit.bind(this)}>Submit</a>
      </div>
    );
  }
}

export default CreateMessage;
