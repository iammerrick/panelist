import React from 'react';
import './HomeHandler.css';
import LoginActions from '../LoginHandler/LoginActions';
import Screenshot from './screen.png';

class HomeHandler extends React.Component {
  handleClick() {
    LoginActions.twitter(this.props.redirect);
  }

  render() {
    return(
      <div className='HomeHandler'>
        <div className='HomeHandler__Info'>
          <div className='HomeHandler__Title'>Panelist.io</div>
          <div className='HomeHandler__Description'>Create a panel for "off the cuff" discussions that are bigger than 140 characters.</div>
          <div className='HomeHandler__LoginContainer'>
            <a onClick={this.handleClick.bind(this)} className='HomeHandler__Login'>
              <div className='HomeHandler__Login__Icon'>
                <i className='icon-twitter'></i>
              </div>
              <div className='HomeHandler__Login__Text'>Login With Twitter</div>
            </a>
          </div>
          <div className='HomeHandler__ImageContainer'>
            <img className='HomeHandler__Image' src={Screenshot}/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeHandler;
