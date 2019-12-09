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
     beerName = this.props.beerName;
     brewery_name = this.props.breweryName;
     brewery_slug = this.props.brewerySlug;
     my_rating = this.props.defaultRating;
     beerNotes = this.props.defaultValue;
     beerABV = this.props.currentABV;
     newBeersAdded = 0;
     //editCurrentBeer = null;

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
                              timestamp: this.timestamp,
                              beer_name: this.beerName,
                              brewery_name: this.brewery_name,
                              brewery_slug: this.brewery_slug,
                              abv: this.beerABV,
                              my_rating: this.my_rating,
                              description: this.beerNotes,
                              editCurrentBeer: this.props.editCurrentBeer,
                         }

          console.log(entry);
          console.log(this.props.editCurrentBeer);
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
               this.brewery_slug = slugify(selectedOption.label);
               this.brewery_name = selectedOption.label;
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

     let beerName = this.props.beerName;
     let currentABV = this.props.currentABV;

     let actionButtonText = this.props.actionButtonText;
     if( !actionButtonText ) { actionButtonText = 'Add New Beer'; }

     let defaultValue = this.props.defaultValue;
     if( !defaultValue ) { defaultValue = 'Description'; }

     let defaultBrewery = this.props.defaultBrewery;
     let defaultRating = this.props.defaultRating;
     //console.log(defaultBrewery);

     let edit = this.props.edit;
     let placeholder='Notes';
     if( !edit ) {
          placeholder='Description';
     }

     this.newBeersAdded++;

       return (
            <>
            <div className="new-beer-area">
               <form className="new-beer" onSubmit={this.createNewBeer} >
                    <div className="clb-flex-row-three-fourths">
                        <NameOfBeer getBeerName={this.getBeerName} beerName={beerName}/>
                        <BeerABV getABV={this.getABV} currentABV={currentABV} />
                   </div>
                         <div className="clb-left-align">
                              <div className="clb-flex-row-two-thirds">
                              <SelectBrewery breweries={breweries} getBrewery={this.getBrewery} edit={edit} defaultBrewery={defaultBrewery} />
                              <SelectRating setRating={this.setRating} reset={this.reset} edit={edit} defaultRating={defaultRating} />
                              </div>
                        </div>
                   <BeerLogNotes placeholder={placeholder} defaultValue={defaultValue} getNotes={this.getBeerDescription} edit={edit} />
                   <Button variant="contained" color="primary" type="submit">{actionButtonText}</Button>
              </form>
         </div>

              {(this.newBeersAdded > 1 && edit !== true) &&
             <div className="successful-added-message">You added a new beer!</div>
           }

         </>
       );
     }

}


export default NewBeerForm;
