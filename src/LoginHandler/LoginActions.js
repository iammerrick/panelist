import Firebase from '../utils/Firebase';
import URL from '../utils/URL';

var LoginActions = {
  twitter() {
    Firebase.authWithOAuthPopup('twitter', function(error, response) {
      if (error) {
        console.log('Login Failed!', error);
      } else {
        URL.redirect('/dashboard');
      }
    });
  },

  logout() {
    Firebase.unauth();
    URL.redirect('/');
  }
};

export default LoginActions;
