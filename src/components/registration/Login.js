import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import LostPassword from './LostPassword';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
         email: '',
         password: '',
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePWChange = this.handlePWChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePWChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    //console.log('A login was submitted: ' + this.state.email + ' -- ' + this.state.password);
    event.preventDefault();

    this.props.authenticateUser( this.state.email, this.state.password );

  }


render() {

     const loginError = this.props.loginError;

     return (

          <div className="login-form-area">
          <p>Welcome! The Beer Journal is an easy, free way to keep track of all the beers you're enjoying. It's for personal use only and your information will never be shared with advertisers or social networks. If you're new here, click on the tab above to register for a new account. Or if you've already registered, then simply login below. Cheers! 🍻</p>
          { loginError === true ?
               <h2>Incorrect email/password combination. Please try again:</h2>
               :
               <h2>Login Below:</h2>
          }
          <form className="login-area" onSubmit={this.handleSubmit} >
          <div className="login-item">
          <TextField
              id="login-form-email"
              name="email"
              label="Email"
              required
              onChange={this.handleEmailChange}
              />
              </div>
              <div className="login-item">
         <TextField
             id="login-form-password"
             name="password"
             label="Password"
             required
             type="password"
             onChange={this.handlePWChange}
             />
             </div>
             <Button variant="contained" color="secondary" type="submit">Submit</Button>
             </form>
             <LostPassword />
        </div>
     );

     }

}

export default Login;
