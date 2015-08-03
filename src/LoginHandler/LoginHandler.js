import React from 'react';
import LoginActions from './LoginActions';

class LoginHandler extends React.Component {

  handleClick() {
    LoginActions.twitter();
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <a onClick={this.handleClick.bind(this)}>Login with Twitter</a>
      </div>
    );
  }
}

export default LoginHandler;
