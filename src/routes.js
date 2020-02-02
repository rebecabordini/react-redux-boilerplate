import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TodoList from './components/TodoList';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ TodoList } />
  </Switch>
);

export default Routes;