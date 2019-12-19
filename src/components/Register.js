import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { firebaseApp } from '../base';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


class Register extends React.Component {
 state = {
   email: '',
   password: '',
   error: null,
 };
handleInputChange = (event) => {
   this.setState({ [event.target.name]: event.target.value });
 };
handleSubmit = (event) => {
   event.preventDefault();
   const { email, password } = this.state;
firebaseApp
     .auth()
     .createUserWithEmailAndPassword(email, password)
     .then((user) => {
       this.props.history.push('/');
     })
     .catch((error) => {
       this.setState({ error: error });
     });
 };

     render() {

          const classes = useStyles();
          const { email, password, error } = this.state;

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
                    <div className="login-area">
                         <TextField
                             id="login-form-name"
                             label="Name"
                             required
                             fullwidth
                             value={email}
                             onChange={this.handleInputChange}
                             />
                   </div>
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
                                 placeholder="Password"
                                value={password}
                                onChange={this.handleInputChange}
                                 />
                       </div>
                       </form>
             </div>
          );

     }

}

export default Register;
