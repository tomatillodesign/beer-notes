import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import HeaderTabs from './components/HeaderTabs.js';
import Router from './components/Router.js';

import { beers, domestics, completeBeerList } from './data/beers.js';

class App extends React.Component {

     state = {
         completeBeerList: completeBeerList
       };

     addNewBeer = (newBeer) => {
          console.log("ADD NEW BEER" + JSON.stringify(newBeer));
          // 1. take a copy of existing state
          const completeBeerList = { ...this.state.completeBeerList };
          // 2. add our new fish to that fishes variable
          //completeBeerList[`newBeer_${Date.now()}`] = newBeer;
          completeBeerList[newBeer[0]] = newBeer[1];
          // 3. Set the new fishes object to state
          this.setState({
               completeBeerList: completeBeerList
          })
     }

     addNewBrewery = (newBrewery) => {
          console.log("ADD NEW BREWERY" + JSON.stringify(newBrewery));

          // 1. take a copy of existing state
          const completeBeerList = { ...this.state.completeBeerList };
          // 2. add our new fish to that fishes variable
          //completeBeerList[`newBeer_${Date.now()}`] = newBeer;
          completeBeerList[newBrewery.brewery_slug] = newBrewery;
          // 3. Set the new fishes object to state
          this.setState({
               completeBeerList: completeBeerList
          })
     }

     render() {

          const beerList = this.state.completeBeerList;
          console.log(beerList);

            return (
              <div className="App">
                <HeaderTabs beerList={beerList} addNewBeer={this.addNewBeer} addNewBrewery={this.addNewBrewery} />
              </div>
            );
     }

}

export default App;
