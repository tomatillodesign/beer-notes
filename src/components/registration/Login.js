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
    console.log('A login was submitted: ' + this.state.email + ' -- ' + this.state.password);
    event.preventDefault();

    this.props.authenticateUser( this.state.email, this.state.password );

  }


render() {

     return (
          <div className="login-form-area">
          <h2>Login Below</h2>
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
             fullwidth
             type="password"
             onChange={this.handlePWChange}
             />
             </div>
             <Button variant="contained" color="primary" type="submit">Submit</Button>
             </form>

        </div>
     );

     }

}

export default Login;
