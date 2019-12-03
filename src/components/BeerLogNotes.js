import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      marginLeft: 0
    },
  },
}));

export default function BeerLogNotes() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
          id="outlined-basic"
          label="Notes"
          variant="filled"
          fullWidth
          multiline
          rows="4"
          variant="outlined"
          />
    </form>
  );
}
