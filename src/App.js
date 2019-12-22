import React from 'react';
import logo from './logo.svg';
import './App.css';

// my components
import HeaderTabs from './components/HeaderTabs';
import LandingPage from './components/registration/LandingPage';
import Logout from './components/registration/Logout';
import OwnerID from './components/OwnerID';
import BeerManager from './BeerManager';

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
         loginError: false,
       };

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
                 },
              });

              this.setState({ loggedInID: newUserID });
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
                      this.setState({ loggedInID: user.user.uid, loginError: false });
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
                     loggedInID: userUID
                       });

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
        this.setState({ loggedInID: '' });

        base.reset();

   }



     render() {

          const loggedInID = this.state.loggedInID;
          const loginError = this.state.loginError;
          console.log("loggedInID: " + loggedInID);

            return (

              <div className="App">
               <MuiThemeProvider theme={theme}>

                  { loggedInID !== '' ?
                  <div>
                    <BeerManager loggedInID={loggedInID} />
                  </div>
             :
               <div className="logged-out-area">
                  <LandingPage
                         registerNewUser={this.registerNewUser}
                         authenticateUser={this.authenticateUser}
                         loginError={loginError}
                    />
                  </div>
             }

              <button onClick={this.authHandler}>AuthHandler</button>
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
