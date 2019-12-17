import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


const Register = () => {

     const classes = useStyles();

     return (
          <div className="login-form-area">
          <h2>Enter your information below to register for your free Beer Journal</h2>
          <div className="login-area">
          <TextField
              id="login-form-name"
              label="Name"
              required
              fullwidth
              // onChange={}
              />
              </div>
              <div className="login-area">
          <div className="login-area">
          <TextField
              id="login-form-email"
              label="Email"
              required
              fullwidth
              // onChange={}
              />
              </div>
              <div className="login-area">
         <TextField
             id="login-form-password"
             label="Password"
             required
             fullwidth
             // onChange={}
             />
             </div>
        </div></div>
     );

}

export default Register;
