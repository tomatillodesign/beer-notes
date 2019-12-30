import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal';
import TextField from '@material-ui/core/TextField';

class LostPassword extends React.Component {

     constructor(props) {
       super(props);
       this.state = {
            showModal: false,
            email: '',
       };

       this.handleEmailChange = this.handleEmailChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);

      //  const [show, setShow] = React.useState(false);
      //
      // const handleClose = () => setShow(false);
      // const handleShow = () => setShow(true);

     }

     handleShow = () => this.setState({ showModal: true });
     handleClose = () => this.setState({ showModal: false });
     //show = () => this.setState({ showModal: true });

     handleEmailChange(event) {
          this.setState({ email: event.target.value });
     }

     handleSubmit(event) {
       console.log('Lost password, sent email to: ' + this.state.email);
       event.preventDefault();

       //this.props.authenticateUser( this.state.email, this.state.password );

     }


     render() {

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
                         </form>
                   </Modal.Body>
                 </Modal>
               </div>

          );

     }

}

export default LostPassword;
