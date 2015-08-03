import React from 'react';
import PanelActions from './PanelActions';
import './PanelCreate.css'

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

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.handleClick();
    }
  }

  render() {
    return (
      <div className='PanelCreate'>
        <div className='PanelCreate__Container'>
          <div className='PanelCreate__Instruction'>
          Enter a topic to discuss...
          </div>
          <div className='PanelCreate__Input'>
            <a className='PanelCreate__Submit'  onClick={this.handleClick.bind(this)}><i className='icon-plus' /></a>
            <input onKeyUp={this.handleKeyUp.bind(this)} className='PanelCreate__Input__Textarea' onChange={this.handleChange.bind(this)} value={this.state.topic}/>
          </div>
        </div>
      </div>
    );
  }
}

export default PanelCreate;
