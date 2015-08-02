import React from 'react';
var Firebase = require('../universal/utils/FirebaseUtils').main.child(ENV.PANEL);
import AppHandler from './AppHandler/AppHandler';

Firebase.on('value', function(snapshot){
  React.render(<AppHandler store={snapshot.val()}/>, document.getElementById('app'));
});



