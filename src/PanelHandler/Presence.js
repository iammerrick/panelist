import React from 'react';
import _ from 'lodash';
import User from './User';
import Firebase from '../utils/Firebase';
import ClassSet from 'react-classset';
import './Presence.css';

class Presence extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
    };
  }
  componentWillMount() {
    var online = Firebase.child('/.info/connected');
    online.on('value', this.handleOnline, this);
    Firebase.child(`panels/${this.props.panelId}`).on('value', this.handleChange, this);
  }

  componentWillUnmount() {
    Firebase.child(`panels/${this.props.panelId}`).off('value', this.handleChange, this);
    Firebase.child('/.info/connected').off('value', this.handleOnline, this);
  }

  handleChange(snapshot) {
    this.setState({
      panel: snapshot.val()
    });
  }

  handleOnline(snapshot) {
    if (snapshot.val()) {
      Firebase.child(`panels/${this.props.panelId}/presence`).child(Firebase.getAuth().uid).onDisconnect().remove();
      Firebase.child(`panels/${this.props.panelId}/presence`).child(Firebase.getAuth().uid).set(snapshot.val());
    }
  }

  handleUserClick(key) {
    if (this.state.panel.facilitator === Firebase.getAuth().uid) {
      var toggle = !this.state.panel.microphones[key];
      Firebase.child(`panels/${this.props.panelId}/microphones`).child(key).set(toggle);
    }
  }

  render() {
    var users = _.map(this.state.panel.presence, (user, key) => {
      var classes = ClassSet({
        'Presence__User': true,
        'Presence__User--HasMicrophone': this.state.panel.microphones[key]
      });

      var indicator = ClassSet({
        'Presence__Indicator': true,
        'Presence__Indicator--HasMicrophone': this.state.panel.microphones[key]
      });

      return (
        <div onClick={this.handleUserClick.bind(this, key)} key={key} className={classes}>
          <div>
            <span className={indicator}></span>
          </div>
          <div>
            {this.state.panel.facilitator === key ? <div className='Presence__Annotation'>Facilitator</div> : null }
            <User userId={key} />
          </div>
        </div>
      );
    });

    return (
      <div>
        {users} 
      </div>
    );
  }
}
export default Presence;
