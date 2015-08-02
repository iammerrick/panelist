import React from 'react';
var Firebase = require('../universal/utils/FirebaseUtils').panel(ENV.PANEL);
import AppHandler from './AppHandler/AppHandler';

Firebase.on('value', function(snapshot){
  React.render(<AppHandler store={snapshot.val()}/>, document.getElementById('app'));
});



