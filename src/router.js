import { Router } from 'director';
import React from 'react';
import AppHandler from './AppHandler/AppHandler';
import LoginHandler from './LoginHandler/LoginHandler';
import LoginActions from './LoginHandler/LoginActions';
import HomeHandler from './HomeHandler/HomeHandler';
import DashboardHandler from './DashboardHandler/DashboardHandler';
import Firebase from './utils/Firebase';
import URL from './utils/URL';

var el = document.getElementById('app');

var routes = {
  '/': () => {
    React.render(<AppHandler><HomeHandler /></AppHandler>, el);
  },
  '/login': () => {
    if (Firebase.getAuth()) return URL.redirect('/dashboard');
    React.render(<AppHandler><LoginHandler /></AppHandler>, el);
  },
  '/dashboard': () => {
    if ( ! Firebase.getAuth()) return URL.redirect('/login');
    React.render(<AppHandler><DashboardHandler /></AppHandler>, el);
  },
  '/logout': () => {
    LoginActions.logout();
  },
};

var router = Router(routes);

router.configure({
  html5history: true
});

export default router;
