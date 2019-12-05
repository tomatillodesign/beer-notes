import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

import Select from 'react-select';
import Creatable, { makeCreatableSelect } from 'react-select/creatable';

import SelectBrewery from './SelectBrewery';
import BeerLogNotes from './BeerLogNotes';
import NameOfBeer from './NameOfBeer';

class NewBeerForm extends React.Component {

     timestamp = Date.now();
     beerName = null;
     brewery = null;
     beerNotes = null;

     createNewBeer = (event) => {
          // 1. Stop the form from submitting
          event.preventDefault();
          // const entry = {
          //      timestamp: Date.now(),
          //      beer_name: this.beerName,
          //      brewery: this.brewery,
          //      description: this.beerNotes,
          // }

          const entry = {
                         brewery: 'TEST',
                         brewery_slug: 'TEST',
                         location: 'Hershey, PA',
                         beers: [
                              {
                                   beer_name: this.beerName,
                                   abv: 8.2,
                                   my_rating: 'Good',
                                   description: this.beerNotes
                              }
                         ]
               }

          console.log(entry);
          // 2 add the new beer to state (App.js)
          this.props.addNewBeer(entry);
          // refresh the form
          event.currentTarget.reset();
     }

     getBeerName = (event) => {
          this.beerName = (event.target.value);
          console.log(this.beerName);
     }

     getBeerDescription = (event) => {
          this.beerNotes = (event.target.value);
     }

     getEntryDate = (date) => {
          this.entryDate = date;
          console.log("ENTRY DATE: " + this.entryDate);
     }

     getBrewery = (selectedOption) => {
          if(selectedOption) {
               this.brewery = selectedOption.label;
          }
     }


render() {

     const beerList = this.props.beerList;

       return (
            <div className="new-beer-area">
               <form className="new-beer" onSubmit={this.createNewBeer} >
                        <NameOfBeer getBeerName={this.getBeerName} />
                        <SelectBrewery beerList={beerList} getBrewery={this.getBrewery} />
                   <BeerLogNotes placeholder='Description' getNotes={this.getBeerDescription} />
                   <Button variant="contained" color="primary" type="submit">Add New Beer</Button>
              </form>
         </div>
       );
     }

}


export default NewBeerForm;
