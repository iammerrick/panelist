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

  function updateHaystack(input, needle) {
    return input.replace(new RegExp('(^|:)(' + needle + ')(:|$)','ig'), '<span class="emoji emoji-$2">$1$2$3</span>');
  }

  ['smile', 'heart'].forEach((emoji) => {
    message = updateHaystack(message, emoji);
  });

  return message;
}
