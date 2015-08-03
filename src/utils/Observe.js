import Firebase from './Firebase';
import React from 'react';

export default (Component) => {
  return class extends React.Component {
    constructor() {
      super(...arguments);
      this.state = {};
    }
    componentWillMount() {
      Firebase.child(Component.observable(this.props)).on('value', this.handleChange, this);
    }

    componentWillUnmount() {
      Firebase.child(Component.observable(this.props)).off('value', this.handleChange, this);
    }

    handleChange(snapshot) {
      this.setState({
        store: snapshot.val()
      });
    }

    render() {
      if (!this.state.store) return null;

      return <Component {...this.props} store={this.state.store} />;
    }

  }
}
