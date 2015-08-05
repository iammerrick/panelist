import React from 'react';

class Share extends React.Component {

  handleShareIntent() {
    window.open(
      `https://twitter.com/intent/tweet?url=${window.location}&text=${this.props.panel.topic}&via=panelistio`,
      'Share via Panelist.io',
      'width=600,height=300,scrollbars=no,location=no,toolbar=no'
    );
  }

  render() {
    return ( 
      <div>
        <div className='PanelHandler__Title'>
          <div>Share This Panel</div>
          <div><a onClick={this.handleShareIntent.bind(this)}><i className='icon-twitter'></i></a></div>

        </div>
        <div className='PanelHandler__Share__InputContainer'>
          <input readOnly={true} value={window.location} className='PanelHandler__Share__Input' />
        </div>
      </div>
    );
  }
}

export default Share;
