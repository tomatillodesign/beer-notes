import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { firebaseApp } from '../base';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


class Register extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
            email: '',
            password: '',
            error: null,
          };

          console.log(this.props);
     }


handleInputChange = (event) => {
   this.setState({ [event.target.name]: event.target.value });
   console.log(event.target.value);
 };

handleSubmit = (event) => {
   event.preventDefault();
   console.log('Registration submitted');
   const { email, password } = this.state;
   console.log(this.state);
firebaseApp
     .auth()
     .createUserWithEmailAndPassword(email, password)
     .then((user) => {
          //console.log(user);
          //this.props.history.push('/');

          // add new user to App-->state and Firebase
          this.props.registerNewUser(user);
     })
     .catch((error) => {
       this.setState({ error: error });
     });
 };

     render() {

          //const classes = useStyles();
          const { email, password, error } = this.state;
          //console.log(this.props.registerNewUser);

          return (
               <div className="login-form-area">
               <h2>Enter your information below to register for your free Beer Journal</h2>
               {error ? (
                 <div>
                   <div>
                     <div>{error.message}</div>
                   </div>
                 </div>
               ) : null}

               <form id="registration-form" onSubmit={this.handleSubmit}>
                    <div className="registration-area">
                         <TextField
                             id="login-form-email"
                             name="email"
                             label="Email"
                             required
                             fullwidth
                             value={this.email}
                             onChange={this.handleInputChange}
                             />
                        </div>
                        <div className="registration-area">
                             <TextField
                                 id="login-form-password"
                                 name="password"
                                 label="Password"
                                 required
                                 fullwidth
                                 placeholder="Password"
                                 value={this.password}
                                onChange={this.handleInputChange}
                                 />
                       </div>
                       <Button variant="contained" color="primary" type="submit">Register Now</Button>
                       </form>
             </div>
          );

     }

}

export default Register;
