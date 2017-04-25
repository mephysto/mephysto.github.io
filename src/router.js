import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

//Layouts

//Pages
import App from './App';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
  </Router>
)