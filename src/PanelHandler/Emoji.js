import React from 'react';
import AppConstants from '../constants/AppConstants';
import cx from 'react-classset';
import _ from 'lodash';
import './Emoji.css';

class Emoji extends React.Component {

  handleEmojiClick(emoji) {
    this.props.onEmojiSelect(emoji);
  }

  render() {
    var emojis = _.map(AppConstants.EMOJI, (emoji, key) => {
      var obj = {
        emoji: true,
        emoji__InsideContainer: true
      }
      obj[emoji] = true;
      var classes = cx(obj);

      return <span key={key} onClick={this.handleEmojiClick.bind(this, key)} className={classes}></span>;
    });
    return (
      <div {...this.props}>
        <div className='Emoji__Container'>
          {emojis}
        </div>
        <div className='Emoji__ArrowDown'></div>
      </div>
    )
  }
}

export default Emoji;
