import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal';
import TextField from '@material-ui/core/TextField';
import base from '../../base';
import { firebaseApp } from '../../base';

class LostPassword extends React.Component {

     constructor(props) {
       super(props);
       this.state = {
            showModal: false,
            email: '',
            sentEmail: false,
       };

       this.handleEmailChange = this.handleEmailChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);

     }

     sentEmailAddress = null;

     handleShow = () => this.setState({ showModal: true });
     handleClose = () => (
          this.setState({
               showModal: false
          })
     );

     handleEmailChange(event) {
          this.setState({ email: event.target.value });
     }

     handleSubmit(event) {
       console.log('Lost password, attempting to send email to: ' + this.state.email);
       event.preventDefault();

       //this.props.authenticateUser( this.state.email, this.state.password );

           var auth = firebaseApp.auth();
           const emailAddress = this.state.email;

           auth.sendPasswordResetEmail(emailAddress).then(function() {
             // Email sent.
             console.log("Reset password email sent");

           }).catch(function(error) {
             // An error happened.
             console.log("ERROR: could not send reset password email");
             console.log(error);
           });

           this.sentEmailAddress = this.emailAdress;
           this.setState({
                sentEmail: true
           });

     }




     render() {

          const emailAdress = this.sentEmailAddress;

          return (
               <div className="lost-password-area">
                 <Button variant="contained" onClick={this.handleShow} >
                   Lost Password
                 </Button>

                 <Modal show={this.state.showModal} onHide={this.handleClose} className="clb-single-beer-notes">
                   <Modal.Header closeButton>
                     <Modal.Title>Lost Your Password</Modal.Title>
                   </Modal.Header>
                   <Modal.Body>
                   { this.state.sentEmail !== true ? (
                         <form className="lost-pw-area" onSubmit={this.handleSubmit} >
                          Enter your email below to reset your password:
                          <div className="login-item">
                          <TextField
                              id="lost-pw-form-email"
                              name="email"
                              label="Email"
                              fullWidth
                              required
                              onChange={this.handleEmailChange}
                              />
                              </div>
                         <Button variant="contained" color="secondary" type="submit" id="lost-pw-submit">Submit</Button>
                         </form> )
                    : (
                         <p className="sent-email-message">If an account exists for {this.state.email}, we've sent an email that will allow you to reset your password. Thanks!</p>
                    )}
                   </Modal.Body>
                 </Modal>
               </div>

          );

     }

}

export default LostPassword;
