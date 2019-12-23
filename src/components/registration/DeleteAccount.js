import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const DeleteAccount = (props) => {

     const nowDeleteAccount = (event) => {
          props.deleteAccount();
     }

     return (
          <Button
               variant="contained"
               // color="primary"
               type="submit"
               // style={{background: "red"}}
               onClick={e =>
            window.confirm(
              "Are you sure you want to permanelty delete your account? All of your information will be removed. You cannot undo this action."
         ) && nowDeleteAccount()
          }>Delete My Account</Button>
     );

}

export default DeleteAccount;
