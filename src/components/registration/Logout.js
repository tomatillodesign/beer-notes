import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { firebaseApp } from '../../base';

const Logout = (props) => {

     return (
          <button onClick={props.logOutUser}>Log Out</button>
     );

}

export default Logout;
