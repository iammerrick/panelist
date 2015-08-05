import _ from 'lodash';

function htmlEscape(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
  
export default (message) => {

  message = htmlEscape(message);

  var match = message.match(/:(.+):/);

  if (match) {
    if (['smile', 'frown', 'thumbs-up', 'thumbs-down'].indexOf(match[1]) !== -1) {
      message = message.replace(/:(.+):/, '<span class="emoji emoji\-$1">:$1:<\/span>');
    }
  }
  return message;
}

