import React from 'react';
import logo from './logo.svg';
import './App.css';

// my components
import HeaderTabs from './components/HeaderTabs';
import LandingPage from './components/registration/LandingPage';
import Logout from './components/registration/Logout';
import OwnerID from './components/OwnerID';

// styles & additional packages
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import {createMuiTheme} from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';

//import { beers, domestics, completeBeerList, beerListUpdated, breweryList } from './data/beers.js';

import base from './base';
import { firebaseApp } from './base';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#478e6e',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#B4DFE5',
      main: '#CC683B',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#FFF',
    },
    // error: will use the default color
  },

  typography: {
   fontFamily: [
      'Open Sans',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
   ].join(','),
  },

});



class App extends React.Component {
     constructor(props) {
          super(props);

     this.state = {
          loggedInID: '',
          ownerID: '',
          ownerEmail: '',
          completeBeerList: [],
          breweries: [],
          beerLog: [],
          beerCardView: 'Alphabetical',
          viewLogin: false,
       };

     }


       componentDidMount(){

            console.log("componentDidMount");
            

            const ownerID = this.state.ownerID;
            console.log("ownerID:" + ownerID);

            base.syncState(`${ownerID}/ownerID`, {
              context: this,
              state: 'ownerID',
              defaultValue: '',
              asArray: false
            });

            base.syncState(`${ownerID}/ownerEmail`, {
              context: this,
              state: 'ownerEmail',
              defaultValue: this.state.ownerEmail,
              asArray: false
            });

            base.syncState(`${ownerID}/completeBeerList`, {
              context: this,
              state: 'completeBeerList',
              asArray: true
            });

            //base.syncState(`${ownerID}/breweries`, {
            base.syncState(`${ownerID}/breweries`, {
              context: this,
              state: 'breweries',
              asArray: true
            });

            base.syncState(`${ownerID}/beerLog`, {
              context: this,
              state: 'beerLog',
              asArray: true
            });

            base.syncState(`${ownerID}/beerCardView`, {
              context: this,
              state: 'beerCardView',
              defaultValue: 'Alphabetical',
              asArray: false
            });

       }




     addNewBeer = (newBeer) => {
          console.log(newBeer);

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
         if( newViewString === 'view-rating' ) { newBeerCardView = 'Rating'; }
         if( newViewString === 'view-recently-added' ) { newBeerCardView = 'Recently Added'; }

         this.setState({ beerCardView: newBeerCardView });

    }


    registerNewUser = (user) => {
             const newUserID = user.user.uid;
             const newUserEmail = user.user.email;
              console.log(newUserID);

             this.setState({
                  ownerID: newUserID,
                  ownerEmail: newUserEmail,
              });


             //console.log(user.uid);
             //this.setState({ ownerUID: user.uid });
             //console.log("Register New User: " + user.email);

             // Create new Journal view if it doesn't exist yet for this user
              firebaseApp.database().ref().update({
                 [newUserID]: {
                      ownerID: newUserID,
                      ownerEmail: newUserEmail,
                      completeBeerList: [],
                      breweries: [],
                      beerLog: [],
                      beerCardView: 'Alphabetical',
                 },
              });

              //const checkForExistingData = await base.fetch(user.user.uid, { context: this });
              // var checkFor ExistingData = firebaseApp.auth().user.user.uid;
              // console.log(checkForExistingData);

        }


        authenticateUser = (email, password) => {

                 console.log("AuthenticateUser: " + email);
                 // const loggedInID = user.user.uid;

               firebaseApp
                    .auth()
                    .signInWithEmailAndPassword(email, password)
                    .then((user) => {
                      console.log("User successfully LOGGED IN");

                      this.setState({
                           ownerID: user.user.uid,
                           loggedInID: user.user.uid
                      });

                      console.log("Logged in: " + user.user.uid);



                    })
                    .catch((error) => {
                      console.log("ERROR: User trying to log in");
                    });



                }



   authHandler = async authData => {

        const user = firebaseApp.auth().currentUser;
        console.log(user);
        if( user !== null ) {
             const userUID = user.uid;
             // const userObject = await base.fetch(userUID, { context: this });
             // console.log("App.js authHandler");
             console.log("Current User ID: " + userUID);
             console.log("Current User Email: " + user.email);
             //if( Object.entries(userObject).length === 0 ) { console.log("No user found"); }

             //update state
             this.setState({
                  loggedInID: userUID,
                  ownerID: userUID,
                    });

        } else {
             console.log("authHandler == no user found");
        }

        const ownerID = this.state.ownerID;
        console.log(ownerID);

   }




   logOutUser = event => {

        firebaseApp.auth().signOut().then(function() {
          // Sign-out successful.
          console.log("Logged OUT successful");

        }).catch(function(error) {
          // An error happened.
          console.log("ERROR: Trying to log out");
        });

        //update state
        this.setState({
             loggedInID: '',
             ownerID: ''
        });

   }



   swapViews = event => {
        this.setState(prevState => ({
            viewLogin: !prevState.viewLogin
          }));
   }


     render() {




          // const user = firebaseApp.auth().currentUser;
          // console.log(user);
          // let userUID = null;

          const user = firebaseApp.auth().currentUser;
          // console.log(user);
          // return(user);
          //
          // let user = this.authHandler();
          // console.log(user);
          let userUID = null;

           if (user) {
             // User is signed in.
             console.log("User is signed in.");
             console.log(user.email);
             if (user != null) {
                 console.log(user.displayName);
                 console.log(user.email);
                 console.log(user.emailVerified);
                 console.log(user.uid);  // The user's ID, unique to the Firebase project. Do NOT use
                                  // this value to authenticate with your backend server, if
                                  // you have one. Use User.getToken() instead.

               userUID = user.uid;

               }
           } else {
             // No user is signed in.
             console.log("No user is signed in.");
           }

          //fire.database().ref('beerLog').set( this.state.beerLog );

          const beerList = this.state.completeBeerList;
          const breweries = this.state.breweries;
          const beerLog = this.state.beerLog;
          const beerCardView = this.state.beerCardView;
          const loggedInID = this.state.loggedInID;
          const ownerID = this.state.ownerID;
          const viewLogin = this.state.viewLogin;

          // console.log(beerList);
          // console.log(breweries);
          // console.log(beerLog);
          // console.log(beerCardView);
          console.log("loggedInID: " + loggedInID);
          console.log("UserUID: " + userUID);
          console.log("OwnerID: " + ownerID);


            return (

              <div className="App">
               <MuiThemeProvider theme={theme}>

               { ( (loggedInID === ownerID) && (ownerID !== '') ) ? (

                   <>
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
                 <p>visitorID: {userUID}</p>
                 <p>ownerID: {ownerID}</p>
                 </>

              ) : <LandingPage registerNewUser={this.registerNewUser}  authenticateUser={this.authenticateUser} /> }

              <OwnerID ownerID={ownerID} />

              <button onClick={this.authHandler}>AuthHandler</button>
              <button onClick={this.swapViews}>Swap Views</button>
              <Logout logOutUser={this.logOutUser}/>

              <div className="clb-footer">
                 <Typography variant="body1">
                 <a href="https://github.com/tomatillodesign/beer-notes" target="_blank">Version 0.7</a> &middot; By Chris Liu-Beers, <a href="http://tomatillodesign.com" target="_blank">Tomatillo Design</a>
                 </Typography>
                 </div>
                 </MuiThemeProvider>
            </div>
            );
     }

}

export default App;
