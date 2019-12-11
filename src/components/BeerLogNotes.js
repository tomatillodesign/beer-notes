import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class BeerLogNotes extends React.Component {

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

          const edit = this.props.edit;

          if( edit ) {

       return (

           <TextField
               id="outlined-basic"
               defaultValue={this.props.defaultValue}
               label={this.props.placeholder}
               fullWidth
               multiline
               rows="4"
               onChange={this.props.getNotes}
               />

       );

 } else {

      return (

          <TextField
              id="outlined-basic"
              defaultValue={this.props.defaultValue}
              label={this.props.placeholder}
              fullWidth
              multiline
              rows="4"
              onChange={this.props.getNotes}
              />

      );

}

}

}

export default BeerLogNotes;
