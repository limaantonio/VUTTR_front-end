import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import List from './pages/list';
import Add from './modals/add';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component = {List}/>
        <Route path='/add' component={Add}/>
        </Switch>
    </BrowserRouter>
  )
}