import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Logout = (props) => {

     return (
          <Button variant="contained" color="secondary" type="submit" onClick={props.resetPassword}>Reset Password via Email Link</Button>
     );

}

export default Logout;
