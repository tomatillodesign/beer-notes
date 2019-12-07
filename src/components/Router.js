import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BeerHome from './BeerHome';
import BeerLog from './BeerLog';
import NotFound from './NotFound';

const Router = () => (
     <BrowserRouter>
          <Switch>
               <Route exact path="/" component={BeerHome} />
               <Route exact path="/log" component={BeerLog} />
               <Route component={NotFound} />
          </Switch>
     </BrowserRouter>
);

export default Router;
