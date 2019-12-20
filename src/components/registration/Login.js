import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


const Login = (props) => {

     const classes = useStyles();

     return (
          <div className="login-form-area">
          <h2>Login Below</h2>
          <form className="login-area" onSubmit={props.authenticateUser} >
          <div className="login-item">
          <TextField
              id="login-form-email"
              label="Email"
              required
              fullwidth
              //onChange={props.authenticate}
              />
              </div>
              <div className="login-item">
         <TextField
             id="login-form-password"
             label="Password"
             required
             fullwidth
             type="password"
             // onChange={}
             />
             </div>
             <Button variant="contained" color="primary" type="submit">Submit</Button>
             </form>

        </div>
     );

}

export default Login;
