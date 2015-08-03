import { Router } from 'director';
import React from 'react';
import AppHandler from './AppHandler/AppHandler';
import LoginHandler from './LoginHandler/LoginHandler';
import LoginActions from './LoginHandler/LoginActions';
import PanelCreate from './PanelCreate/PanelCreate';
import HomeHandler from './HomeHandler/HomeHandler';
import DashboardHandler from './DashboardHandler/DashboardHandler';
import Firebase from './utils/Firebase';
import URL from './utils/URL';

var el = document.getElementById('app');

function lock(route) {
  return () => {
    if ( ! Firebase.getAuth()) return URL.redirect('/login');
    route();
  }
}

var routes = {
  '/': () => {
    React.render(<AppHandler><HomeHandler /></AppHandler>, el);
  },
  '/login': () => {
    if (Firebase.getAuth()) return URL.redirect('/dashboard');
    React.render(<AppHandler><LoginHandler /></AppHandler>, el);
  },
  '/dashboard': lock(() => {
    React.render(<AppHandler><DashboardHandler /></AppHandler>, el);
  }),
  '/panel/create': lock(() => {
    React.render(<AppHandler><PanelCreate /></AppHandler>, el);
  }),
  '/logout': () => {
    LoginActions.logout();
  },
};

var router = Router(routes);

router.configure({
  html5history: true
});

export default router;
