import { Router } from 'director';
import React from 'react';
import AppHandler from './AppHandler/AppHandler';
import LoginActions from './LoginHandler/LoginActions';
import PanelCreate from './PanelCreate/PanelCreate';
import HomeHandler from './HomeHandler/HomeHandler';
import DashboardHandler from './DashboardHandler/DashboardHandler';
import Firebase from './utils/Firebase';
import URL from './utils/URL';
import PanelHandler from './PanelHandler/PanelHandler';
import queryString from 'query-string';

var el = document.getElementById('app');

function lock(route) {
  return (...args) => {
    if ( ! Firebase.getAuth()) return URL.redirect(`/?redirect=${window.location}`);
    route(...args);
  }
}

var routes = {
  '/': () => {
    var { redirect } = queryString.parse(window.location.search);
    React.render(<HomeHandler redirect={redirect || '/panel/create'} />, el);
  },
  '/dashboard': lock(() => {
    React.render(<AppHandler><DashboardHandler /></AppHandler>, el);
  }),
  '/panel/create': lock(() => {
    React.render(<AppHandler><PanelCreate /></AppHandler>, el);
  }),
  '/panel/:id': lock((id) => {
    React.render(<AppHandler><PanelHandler panelId={id} /></AppHandler>, el);
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
