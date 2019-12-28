import React from 'react';
import logo from './logo.svg';
import './App.css';

// my components
import HeaderTabs from './components/HeaderTabs';
import LandingPage from './components/registration/LandingPage';
import Logout from './components/registration/Logout';
import OwnerID from './components/OwnerID';
import BeerManager from './BeerManager';
import { beerTypes } from './data/beers.js';

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
      //main: '#478e6e',
      main: '#45484d',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#478e6e',
      main: '#478e6e',
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
         loggedInEmail: '',
         loginError: false,
       };

     }


     componentDidMount() {
          console.log("App.js mounted");
     }


    registerNewUser = (user) => {

             const newUserID = user.user.uid;
             const newUserEmail = user.user.email;
              console.log(newUserID);

             // Create new Journal view if it doesn't exist yet for this user
              firebaseApp.database().ref().update({
                 [newUserID]: {
                      ownerID: newUserID,
                      ownerEmail: newUserEmail,
                      completeBeerList: [],
                      breweries: [],
                      beerLog: [],
                      beerCardView: 'Alphabetical',
                      beerTypes: beerTypes
                 },
              });

              this.setState({
                   loggedInID: newUserID,
                   loggedInEmail: newUserEmail,
                   beerTypes: beerTypes
               });
               localStorage.setItem('beerJournal.loggedInID', newUserID);
               localStorage.setItem('beerJournal.loggedInEmail', newUserEmail);
              console.log("REGISTERED AND Logged in: " + newUserID);

        }


        authenticateUser = (email, password) => {

                 console.log("AuthenticateUser: " + email);
                 // const loggedInID = user.user.uid;

               firebaseApp
                    .auth()
                    .signInWithEmailAndPassword(email, password)
                    .then((user) => {
                      console.log("User successfully LOGGED IN" + user.user.uid);
                      this.setState({
                           loggedInID: user.user.uid,
                           loggedInEmail: user.user.email,
                           loginError: false });
                      localStorage.setItem('beerJournal.loggedInID', user.user.uid);
                      localStorage.setItem('beerJournal.loggedInEmail', email);
                    })
                    .catch((error) => {
                      console.log("ERROR: User trying to log in");
                      this.setState({ loginError: true });
                    });

                }



      authHandler = async authData => {

           //console.log(authData);
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
                     loggedInEmail: user.email,
                       });
               localStorage.setItem('beerJournal.loggedInID', userUID);
               localStorage.setItem('beerJournal.loggedInEmail', user.email);

           } else {
                console.log("authHandler == no user found");
           }

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
             loggedInEmail: '',
          });
        localStorage.removeItem('beerJournal.loggedInID');
        localStorage.removeItem('beerJournal.loggedInEmail');

        base.reset();

   }


   permanentlyDeleteUserAndInfo = user => {

        console.log(user);
        const userUID = user.uid;

             base.remove(userUID)
            .then(() => {
              console.log("User " + userUID + " permanently deleted");

            })
            .catch(error => {
              //handle error
            });

            //update state
           this.setState({
                loggedInID: '',
                loggedInEmail: '',
             });
           localStorage.removeItem('beerJournal.loggedInID');
           localStorage.removeItem('beerJournal.loggedInEmail');

       }


     render() {

          let loggedInID = this.state.loggedInID;
          let loggedInEmail = this.state.loggedInEmail;
          //const loggedInEmail = localStorage.getItem('beerJournal.loggedInEmail');
          const loginError = this.state.loginError;

          const loggedInIDLocal = localStorage.getItem('beerJournal.loggedInID');
          const loggedInEmailLocal = localStorage.getItem('beerJournal.loggedInEmail');
          console.log("LOCAL STORAGE: " + loggedInIDLocal);

          if( loggedInIDLocal !== null ) { loggedInID = loggedInIDLocal; }
          if( loggedInEmailLocal !== null ) { loggedInEmail = loggedInEmailLocal; }


            return (

              <div className="App">
               <MuiThemeProvider theme={theme}>

                  { loggedInID !== '' ?
                  <>
                    <BeerManager
                         loggedInID={loggedInID}
                         loggedInEmail={loggedInEmail}
                         logOutUser={this.logOutUser}
                         permanentlyDeleteUserAndInfo={this.permanentlyDeleteUserAndInfo}
                    />
                  </>
             :
               <div className="logged-out-area">
                  <LandingPage
                         registerNewUser={this.registerNewUser}
                         authenticateUser={this.authenticateUser}
                         loginError={loginError}
                    />
                  </div>
             }

              <div className="clb-footer">
                 <Typography variant="body1">
                 <a href="https://github.com/tomatillodesign/beer-notes" target="_blank">Version 0.9</a> &middot; By Chris Liu-Beers, <a href="http://tomatillodesign.com" target="_blank">Tomatillo Design</a>
                 </Typography>
                 </div>
                 </MuiThemeProvider>
            </div>
            );
     }

}

export default App;
