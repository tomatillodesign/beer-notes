import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { firebaseApp } from '../base';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class UpdatedRegister extends Component {
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
   const { email, password, error } = this.state;
   return (
     <div>
           <h2>Register</h2>
       {error ? (
         <div>
           <div>
             <div>{error.message}</div>
           </div>
         </div>
       ) : null}
         <div>
           <form onSubmit={this.handleSubmit}>
             <TextField type="text" name="email" placeholder="Email" value={email} onChange={this.handleInputChange} />
             <TextField
               type="password"
               name="password"
               placeholder="Password"
               value={password}
               onChange={this.handleInputChange}
             />
             <button children="Register" />
           </form>
         </div>
       </div>
   );
 }
}
export default withRouter(UpdatedRegister);
