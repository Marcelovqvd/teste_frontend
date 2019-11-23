import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './services/auth';

import Login from './pages/Login/index';
import UsersList from './pages/UsersList';
import User from './pages/User';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
    }
  />
);
console.log(isAuthenticated());

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <PrivateRoute path='/users' component={UsersList} />
        <PrivateRoute path='/user/:id' component={User} />
      </Switch>
    </BrowserRouter>
  )
}
