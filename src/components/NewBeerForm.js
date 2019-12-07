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
import BeerABV from './BeerABV';
import SelectRating from './SelectRating';
import { slugify } from '../helpers';

class NewBeerForm extends React.Component {

     timestamp = Date.now();
     beerName = null;
     brewery = null;
     my_rating = null;
     beerNotes = null;
     beerABV = null;
     newBeersAdded = 0;

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
                              beer_name: this.beerName,
                              brewery: this.brewery,
                              abv: this.beerABV,
                              my_rating: this.my_rating,
                              description: this.beerNotes
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

     getABV = (event) => {
          this.beerABV = (event.target.value);
     }

     getEntryDate = (date) => {
          this.entryDate = date;
          console.log("ENTRY DATE: " + this.entryDate);
     }

     getBrewery = (selectedOption) => {
          if(selectedOption) {
               this.brewery = slugify(selectedOption.label);
          }
     }

     setRating = (selectedOption) => {
          if(selectedOption) {
               this.my_rating = selectedOption.label;
          }
     }


render() {

     const beerList = this.props.beerList;
     const breweries = this.props.breweries;
     this.newBeersAdded++;

       return (
            <>
            <div className="new-beer-area">
               <form className="new-beer" onSubmit={this.createNewBeer} >
                    <div className="clb-flex-row-three-fourths">
                        <NameOfBeer getBeerName={this.getBeerName} />
                        <BeerABV getABV={this.getABV} />
                   </div>
                         <div className="clb-left-align">
                              <div className="clb-flex-row-two-thirds">
                              <SelectBrewery breweries={breweries} getBrewery={this.getBrewery} />
                              <SelectRating setRating={this.setRating} reset={this.reset} />
                              </div>
                        </div>
                   <BeerLogNotes placeholder='Description' getNotes={this.getBeerDescription} />
                   <Button variant="contained" color="primary" type="submit">Add New Beer</Button>
              </form>
         </div>
         
              {this.newBeersAdded > 1 &&
             <div className="successful-added-message">You added a new beer!</div>
           }

         </>
       );
     }

}


export default NewBeerForm;
