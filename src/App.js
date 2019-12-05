import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import HeaderTabs from './components/HeaderTabs.js';
import Router from './components/Router.js';

import { beers, domestics, completeBeerList } from './data/beers.js';

class App extends React.Component {

     state = {
         completeBeerList: { completeBeerList }
       };

     render() {

          const beerList = completeBeerList;

            return (
              <div className="App">
                <HeaderTabs beerList={beerList} />
              </div>
            );
     }

}

export default App;
