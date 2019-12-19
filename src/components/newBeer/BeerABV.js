import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class BeerABV extends React.Component {

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
               id="beer-abv-text-input"
               label="ABV"
               defaultValue={this.props.currentABV}
               fullWidth
               onChange={this.props.getABV}
               />

       );

}

}

export default BeerABV;
