import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { firebaseApp } from '../../base';

const Logout = (props) => {

     function logOutUser(event) {
          firebaseApp.auth().signOut().then(function() {
            // Sign-out successful.
            console.log("Logged OUT successful");
          }).catch(function(error) {
            // An error happened.
            console.log("ERROR: Trying to log out");
          });

     }

     return (
          <button onClick={logOutUser}>Log Out</button>
     );

}

export default Logout;
