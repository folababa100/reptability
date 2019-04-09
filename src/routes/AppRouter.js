import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HomePage from '../components/HomePage';
import SignupPage from '../components/SignupPage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage'

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route component={HomePage} path="/" exact={true}/>
        <Route component={SignupPage} path="/signup"/>
        <Route component={LoginPage} path="/login"/>
        <Route component={NotFoundPage} path="*"/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
