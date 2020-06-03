import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import List from './pages/list';


export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component = {List}/>
       
        </Switch>
    </BrowserRouter>
  )
}