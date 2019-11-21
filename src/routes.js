import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/index';
import UsersList from './pages/UsersList';
import User from './pages/User';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/users' exact component={UsersList} />
        <Route path='/user' exact component={User} />
      </Switch>
    </BrowserRouter>
  )
}
