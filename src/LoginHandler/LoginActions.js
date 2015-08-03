import Firebase from '../utils/Firebase';
import URL from '../utils/URL';

var LoginActions = {
  twitter(redirect) {
    Firebase.authWithOAuthPopup('twitter', function(error, response) {
      if (error) {
        console.log('Login Failed!', error);
      } else {
        Firebase.child('users').child(response.uid).set({
          name: response.twitter.displayName,
          username: response.twitter.username,
          image: response.twitter.profileImageURL
        });
        URL.redirect(redirect);
      }
    });
  },

  logout() {
    Firebase.unauth();
    URL.redirect('/');
  }
};

export default LoginActions;
