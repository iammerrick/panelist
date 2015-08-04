import React from 'react';
import Firebase from '../utils/Firebase';
import PanelActions from './PanelActions';
import TextArea from 'react-textarea-autosize';
import Observe from '../utils/Observe';
import './CreateMessage.css';
import cx from 'react-classset';

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
      var matches = this.state.value.match(/^\/me /);
      var lock = this.state.value.match(/^\/lock/);

      if (matches !== null) {
        PanelActions.createEvent(this.props.panelId, Firebase.getAuth().uid, this.state.value.replace(/^\/me /, ''));
      } else if(lock !== null) {
        PanelActions.setLocked(this.props.panelId, true);
      } else {
        PanelActions.create(this.props.panelId, {
          source: this.state.value
        });
      }
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
    var self = this;

    function hasMicrophone(user, panel) {
      return panel.microphones[user];
    }

    function isDisabled() {
      return self.props.store.isLocked || !hasMicrophone(Firebase.getAuth().uid, self.props.store);
    }

    var value = this.state.value;

    if (!hasMicrophone(Firebase.getAuth().uid, self.props.store)) {
      value = 'Only panelists are allowed to chat.'
    }

    if (this.props.store.isLocked) {
      value = 'This panel has been locked by the facilitator.';
    }

    var classes = cx({
      CreateMessage__Input: true,
      'CreateMessage__Input--Locked': isDisabled()
    });

    return (
      <div className='CreateMessage'>
        <div className={classes}>
          <a className='CreateMessage__Submit' disabled={this.props.store.isLocked} onClick={this.handleSubmitClick.bind(this)}><i className={isDisabled() ? 'icon-lock' : 'icon-plus'} /></a>
          <TextArea readOnly={isDisabled()} onKeyUp={this.handleKeyUp.bind(this)} className='CreateMessage__Input__Textarea' onChange={this.handleChange.bind(this)} value={value}/>
        </div>
      </div>
    );
  }
}

CreateMessage.observable = (props) => {
  return `panels/${props.panelId}`;
}

export default Observe(CreateMessage);
