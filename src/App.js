import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import HeaderTabs from './components/HeaderTabs.js';
import Typography from '@material-ui/core/Typography';
import Router from './components/Router.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import CssBaseline from '@material-ui/core/CssBaseline';

import { beers, domestics, completeBeerList, beerListUpdated, breweryList } from './data/beers.js';

class App extends React.Component {

     state = {
         completeBeerList: beerListUpdated,
         breweries: breweryList,
         beerLog: [],
       };

     addNewBeer = (newBeer) => {
          console.log(newBeer);
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
          console.log(newBrewery);
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

     addLogEntry = (logEntry) => {
          console.log(logEntry);
         // 1. take a copy of existing state
         // const logEntries = { ...this.state.beerLog };
         // // 2. add our new fish to that fishes variable
         // logEntries[`logEntry_${Date.now()}`] = logEntry;
         // // 3. Set the new fishes object to state
         // this.setState({
         //      beerLog: logEntries
         // })
         this.setState(prevState => ({
           beerLog: [...prevState.beerLog, logEntry]
         }))
    }



     render() {

          const beerList = this.state.completeBeerList;
          const breweries = this.state.breweries;
          const beerLog = this.state.beerLog;

          console.log(beerList);
          console.log(breweries);
          console.log(beerLog);

            return (
              <div className="App">
               
                <HeaderTabs
                    beerList={beerList}
                    breweries={breweries}
                    addNewBeer={this.addNewBeer}
                    addNewBrewery={this.addNewBrewery}
                    addLogEntry={this.addLogEntry}
                    beerLog={beerLog}
               />

              <div className="clb-footer">
                 <Typography variant="p">
                 By Chris Liu-Beers &middot; <a href="http://tomatillodesign.com" target="_blank">Tomatillo Design</a>
                 </Typography>
                 </div>

            </div>
            );
     }

}

export default App;
