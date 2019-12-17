import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BeerHome from './BeerHome';
import LandingPage from './LandingPage';
import BeerLog from './BeerLog';
import NotFound from './NotFound';
import App from '../App.js';

const Router = () => (
     <BrowserRouter>
          <Switch>
               <Route exact path="/" component={LandingPage} />
               <Route exact path="/journal/:journalID" component={App} />
               <Route component={NotFound} />
          </Switch>
     </BrowserRouter>
);

export default Router;
