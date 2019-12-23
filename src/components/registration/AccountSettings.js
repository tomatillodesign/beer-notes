import React from 'react';
import Logout from './Logout';
import ResetPassword from './ResetPassword';
import DeleteAccount from './DeleteAccount';
import base from '../../base';
import { firebaseApp } from '../../base';

class AccountSettings extends React.Component {

     constructor(props) {
          super(props);

          this.state = {
              emailedResetLink: false,
            };

     }

     resetPassword = () => {

          var auth = firebaseApp.auth();
          const emailAddress = this.props.loggedInEmail;

          auth.sendPasswordResetEmail(emailAddress).then(function() {
            // Email sent.
            console.log("Reset password email sent");

          }).catch(function(error) {
            // An error happened.
            console.log("ERROR: could not send reset password email");
          });

          this.setState({ emailedResetLink: true });

     }


     deleteAccount = () => {

          var user = firebaseApp.auth().currentUser;

          user.delete().then(function() {
            // User deleted.
            console.log("Current User PERMANENTLY DELETED");
          }).catch(function(error) {
            // An error happened.
            console.log("ERROR: could not delete current user");
          });

          this.props.permanentlyDeleteUserAndInfo(user);

     }





     render() {

          const emailedResetLink = this.state.emailedResetLink;

          return (
               <>
               <h2>Account Settings</h2>
               { emailedResetLink &&
                    <div className="account-action-message emailed-reset-link successful-added-message">
                         We've emailed you a link to reset your password. Please check your inbox.
                    </div>
               }
               <div className="account-buttons">
               <div className="account-action-area">
                    <ResetPassword resetPassword={this.resetPassword}/>
               </div>
               <div className="account-action-area">
                    <Logout logOutUser={this.props.logOutUser}/>
               </div>
               <div className="account-action-area">
                    <DeleteAccount deleteAccount={this.deleteAccount}/>
               </div>
               </div>
              </>
          );

     }

}

export default AccountSettings;
