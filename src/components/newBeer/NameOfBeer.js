import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class NameOfBeer extends React.Component {

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

     //console.log(this.props.beerName);

       return (

           <TextField
               id="name-of-beer-text-input"
               label="Name of Beer"
               defaultValue={this.props.beerName}
               fullWidth
               required
               onChange={this.props.getBeerName}
               />

       );

}

}

export default NameOfBeer;
