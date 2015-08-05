import React from 'react';
import './Emoji.css';

class Emoji extends React.Component {
  render() {
    return (
      <div {...this.props}>
        <div className='Emoji__Container'>
          <span className='emoji emoji-thumbs-up'></span>
          <span className='emoji emoji-thumbs-down'></span>
          <span className='emoji emoji-smiley'></span>
          <span className='emoji emoji-heart'></span>
          <span className='emoji emoji-disappointed'></span>
          <span className='emoji emoji-tongue'></span>
          <span className='emoji emoji-wink'></span>
          <span className='emoji emoji-cool'></span>
          <span className='emoji emoji-poop'></span>
        </div>
        <div className='Emoji__ArrowDown'></div>
      </div>
    )
  }
}

export default Emoji;
