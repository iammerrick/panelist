import { Router } from 'director';
import React from 'react';
import AppHandler from './AppHandler/AppHandler';
import LoginHandler from './LoginHandler/LoginHandler';
import HomeHandler from './HomeHandler/HomeHandler';

var el = document.getElementById('app');

var routes = {
  '/': () => {
    React.render(<AppHandler><HomeHandler /></AppHandler>, el);
  },
  '/login': () => {
    React.render(<AppHandler><LoginHandler /></AppHandler>, el);
  }
};

var router = Router(routes);

router.configure({
  html5history: true
});

export default router;
