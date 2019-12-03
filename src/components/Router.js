import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BeerHome from './BeerHome';
import BeerLog from './BeerLog';
import BeerCards from './BeerCards';
import NotFound from './NotFound';

const Router = () => (
     <BrowserRouter>
          <Switch>
               <Route exact path="/" component={BeerHome} />
               <Route exact path="/log" component={BeerLog} />
               <Route exact path="/cards" component={BeerCards} />
               <Route component={NotFound} />
          </Switch>
     </BrowserRouter>
);

export default Router;
