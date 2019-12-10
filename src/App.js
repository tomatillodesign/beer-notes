import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import HeaderTabs from './components/HeaderTabs.js';
import Typography from '@material-ui/core/Typography';
import Router from './components/Router.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import {createMuiTheme} from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import deepPurple from '@material-ui/core/colors/deepPurple';

import { beers, domestics, completeBeerList, beerListUpdated, breweryList } from './data/beers.js';

const theme = createMuiTheme({
     palette: {
       primary: deepPurple,
       secondary: orange,
     },
});

class App extends React.Component {

     state = {
         completeBeerList: beerListUpdated,
         breweries: breweryList,
         beerLog: [],
       };

     addNewBeer = (newBeer) => {
          console.log(newBeer);
          // 1. take a copy of existing state
          //const prevBeerList = { ...this.state.completeBeerList };
          // 2. add our new fish to that fishes variable
          //completeBeerList[`newBeer_${Date.now()}`] = newBeer;
          //completeBeerList[newBeer[0]] = newBeer[1];
          // 3. Set the new fishes object to state
          // this.setState({
          //      completeBeerList: completeBeerList
          // })

          if( newBeer.editCurrentBeer ) {
               console.log("EDITING THIS BEER: " + newBeer.beer_name);
               let beerID = newBeer.id;
               let beerName = newBeer.beer_name;
               let clbCustomPreviousState = [...this.state.completeBeerList];
               let getBeerObjInState = clbCustomPreviousState.filter(obj => {
                 return obj.id === beerID
            });
               //console.log(getBeerObjInState);

               let index = clbCustomPreviousState.map(function(e) { return e.id; }).indexOf(beerID);
               //console.log(index);

               let ids = [...this.state.completeBeerList];     // create the copy of state array
               ids[index] = newBeer;                  //new value
               //console.log(ids[index]);
               this.setState({ completeBeerList: ids });            //update the value

          } else {

               this.setState(prevState => ({
                 completeBeerList: [...prevState.completeBeerList, newBeer]
            }));

           }
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


    removeBeer = (beerObj) => {
         //console.log(beerObj);
         console.log("Removed: " + beerObj.beer_name);
         let beerID = beerObj.id;
         let beerName = beerObj.beer_name;
         let clbCopyBeerState = [...this.state.completeBeerList];
         let getBeerObjInState = clbCopyBeerState.filter(obj => {
           return obj.id === beerID
          });

          let index = clbCopyBeerState.map(function(e) { return e.id; }).indexOf(beerID);
          clbCopyBeerState.splice(index, 1);

          this.setState({ completeBeerList: clbCopyBeerState });

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
               <MuiThemeProvider theme={theme}>
                <HeaderTabs
                    beerList={beerList}
                    breweries={breweries}
                    addNewBeer={this.addNewBeer}
                    addNewBrewery={this.addNewBrewery}
                    addLogEntry={this.addLogEntry}
                    removeBeer={this.removeBeer}
                    beerLog={beerLog}
               />

              <div className="clb-footer">
                 <Typography variant="body1">
                 Version 0.2 &middot; Updated Dec 9 &middot; A custom React App by Chris Liu-Beers, <a href="http://tomatillodesign.com" target="_blank">Tomatillo Design</a>
                 </Typography>
                 </div>
                 </MuiThemeProvider>
            </div>
            );
     }

}

export default App;
