import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import HeaderTabs from './components/HeaderTabs.js';
import Router from './components/Router.js';

import { beers, domestics, completeBeerList, beerListUpdated, breweryList } from './data/beers.js';

class App extends React.Component {

     state = {
         completeBeerList: beerListUpdated,
         breweries: breweryList
       };

     addNewBeer = (newBeer) => {
          console.log("ADD NEW BEER" + JSON.stringify(newBeer));
          // 1. take a copy of existing state
          //const completeBeerList = { ...this.state.completeBeerList };
          // 2. add our new fish to that fishes variable
          //completeBeerList[`newBeer_${Date.now()}`] = newBeer;
          //completeBeerList[newBeer[0]] = newBeer[1];
          // 3. Set the new fishes object to state
          // this.setState({
          //      completeBeerList: completeBeerList
          // })
          this.setState(prevState => ({
            completeBeerList: [...prevState.completeBeerList, newBeer]
          }))
     }

     addNewBrewery = (newBrewery) => {
          console.log("ADD NEW BREWERY" + JSON.stringify(newBrewery));
          // 1. take a copy of existing state
          //const breweries = { ...this.state.breweries };
          // 2. add our new fish to that fishes variable
          //completeBeerList[`newBeer_${Date.now()}`] = newBeer;
          //breweries[] = newBrewery;
          // 3. Set the new fishes object to state
          // this.setState({
          //      breweries: breweries
          // })
          this.setState(prevState => ({
            breweries: [...prevState.breweries, newBrewery]
          }))
     }

     render() {

          const beerList = this.state.completeBeerList;
          const breweries = this.state.breweries;
          console.log(beerList);

            return (
              <div className="App">
                <HeaderTabs beerList={beerList} breweries={breweries} addNewBeer={this.addNewBeer} addNewBrewery={this.addNewBrewery} />
              </div>
            );
     }

}

export default App;
