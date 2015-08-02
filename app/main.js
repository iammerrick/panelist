import React from 'react';
var Firebase = require('../universal/utils/FirebaseUtils').panel(ENV.PANEL);
import AppHandler from './AppHandler/AppHandler';

React.render(<AppHandler />, document.getElementById('app'));


