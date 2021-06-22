import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Table from '../containers/Table';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/table' component={Table} />
      <Route exact path='/login' component={Login} />
    </Switch>
  </BrowserRouter>
);

export default App;
