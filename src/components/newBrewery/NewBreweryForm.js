import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

import Select from 'react-select';
import Creatable, { makeCreatableSelect } from 'react-select/creatable';

import SelectUSState from './SelectUSState';
import NameOfBrewery from './NameOfBrewery';
import BreweryCity from './BreweryCity';
import { slugify } from '../../helpers';

const shortid = require('shortid');

class NewBreweryForm extends React.Component {

     timestamp = Date.now();
     id = this.props.id;
     breweryName = null;
     brewerySlug = null;
     breweryCity = null;
     breweryState = null;
     newBeersAdded = 0;

     createNewBrewery = (event) => {
          // 1. Stop the form from submitting
          event.preventDefault();

          let customID = this.props.id;
          console.log('SHORT Brewery ID: ' + customID);
          if( customID === undefined ) {
               customID = shortid.generate();
               console.log('SHORT Brewery ID: ' + customID);
          }

          const entry = {
                         id: customID,
                         brewery: this.breweryName,
                         brewery_slug: this.brewerySlug,
                         city: this.breweryCity,
                         state: this.breweryState,
                         timestamp: this.timestamp,
                    }

          console.log(entry);
          // 2 add the new beer to state (App.js)
          this.props.addNewBrewery(entry);
          // refresh the form
          event.currentTarget.reset();
     }

     getBreweryName = (event) => {
          this.breweryName = (event.target.value);
          this.brewerySlug = slugify(event.target.value);
     }

     getBreweryCity = (event) => {
          this.breweryCity = (event.target.value);
     }

     getBreweryState = (selectedOption) => {
          if(selectedOption) {
               this.breweryState = selectedOption.label;
          }
     }


render() {

     this.newBeersAdded++;

       return (
            <>
            <div className="new-beer-area">
               <form className="new-beer" onSubmit={this.createNewBrewery} >
                        <NameOfBrewery getBreweryName={this.getBreweryName} />
                        <div className="clb-flex-row-fifty-fifty">
                        <BreweryCity getBreweryCity={this.getBreweryCity} />
                        <SelectUSState getBreweryState={this.getBreweryState} />
                        </div>
                   <Button variant="contained" color="secondary" type="submit">Add New Brewery</Button>
              </form>
         </div>
         {this.newBeersAdded > 1 &&
        <div className="successful-added-message">You added a new brewery!</div>
      }
      </>
       );
     }

}


export default NewBreweryForm;
