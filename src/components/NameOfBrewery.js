import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class NameOfBrewery extends React.Component {

     useStyles = makeStyles(theme => ({
       root: {
         '& > *': {
           margin: theme.spacing(1),
           marginLeft: 0
         },
       },
     }));

  classes = this.useStyles;

 //  onChange = (event) => {
 //       console.log(event.target.value);
 // }

render() {

       return (

           <TextField
               id="outlined-basic"
               label="Name of Brewery"
               fullWidth
               onChange={this.props.getBreweryName}
               />

       );

}

}

export default NameOfBrewery;
