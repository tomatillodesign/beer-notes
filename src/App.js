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

//import fire from './fire';
import base from './base';

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
         beerCardView: 'Alphabetical',
       };


       componentDidMount(){

            console.log("componentDidMount");

            base.syncState(`completeBeerList`, {
              context: this,
              state: 'completeBeerList',
              asArray: true
            });

            base.syncState(`breweries`, {
              context: this,
              state: 'breweries',
              asArray: true
            });

            base.syncState(`beerLog`, {
              context: this,
              state: 'beerLog',
              asArray: true
            });

            base.syncState(`beerCardView`, {
              context: this,
              state: 'beerCardView',
              defaultValue: 'Alphabetical',
              asArray: false
            });

       }




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

               // make sure none of the object's properties are undefined, to prevent errors
               if (typeof newBeer.brewery_name === 'undefined') { newBeer.brewery_name = null; }
               if (typeof newBeer.brewery_slug === 'undefined') { newBeer.brewery_slug = null; }
               if (typeof newBeer.backgroundColor === 'undefined') { newBeer.backgroundColor = null; }
               if (typeof newBeer.abv === 'undefined') { newBeer.abv = null; }
               if (typeof newBeer.my_rating === 'undefined') { newBeer.my_rating = null; }
               if (typeof newBeer.description === 'undefined') { newBeer.description = null; }
               newBeer.editCurrentBeer = false;

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

          // Update the completeBeerList state to add 1 to this beer's count
          let beerID = logEntry.beerID;
          let clbPreviousBeerListState = [...this.state.completeBeerList];
          let getBeerObjInState = clbPreviousBeerListState.filter(obj => {
            return obj.id === beerID
          });
          let index = clbPreviousBeerListState.map(function(e) { return e.id; }).indexOf(beerID);
          let previousCount = clbPreviousBeerListState[index].count;
          let newCount = previousCount + 1;
          console.log("PREV COUNT: " + previousCount);
          console.log("NEW COUNT: " + newCount);
          clbPreviousBeerListState[index].count = newCount;
          this.setState({ completeBeerList: clbPreviousBeerListState });

         this.setState(prevState => ({
           beerLog: [...prevState.beerLog, logEntry]
         }))

         //fire.database().ref('beerLog').set( this.state.beerLog );

    }


    removeBeer = (beerObj) => {
         console.log(beerObj);
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


    changeBeerCardView = (newViewString) => {
         console.log('CHANGE BEER CARD VIEW');
         console.log(newViewString);
         let newBeerCardView = 'Alphabetical';
         if( newViewString === 'view-high-count' ) { newBeerCardView = 'High Count'; }
         if( newViewString === 'view-recently-added' ) { newBeerCardView = 'Recently Added'; }

         this.setState({ beerCardView: newBeerCardView });

    }







     render() {

          //fire.database().ref('beerLog').set( this.state.beerLog );

          const beerList = this.state.completeBeerList;
          const breweries = this.state.breweries;
          const beerLog = this.state.beerLog;
          const beerCardView = this.state.beerCardView;

          console.log(beerList);
          console.log(breweries);
          console.log(beerLog);
          console.log(beerCardView);

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
                    beerCardView={beerCardView}
                    changeBeerCardView={this.changeBeerCardView}
               />

              <div className="clb-footer">
                 <Typography variant="body1">
                 Version 0.5 &middot; Updated Dec 16 &middot; A custom React App by Chris Liu-Beers, <a href="http://tomatillodesign.com" target="_blank">Tomatillo Design</a>
                 </Typography>
                 </div>
                 </MuiThemeProvider>
            </div>
            );
     }

}

export default App;
