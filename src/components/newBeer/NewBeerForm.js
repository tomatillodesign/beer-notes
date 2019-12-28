import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Select from 'react-select';
import Creatable, { makeCreatableSelect } from 'react-select/creatable';
import { SliderPicker } from 'react-color';
import SelectBrewery from '../shared/SelectBrewery';
import Description from '../shared/Description';
import NameOfBeer from './NameOfBeer';
import BeerABV from './BeerABV';
import SelectRating from '../shared/SelectRating';
import SelectBeerType from '../shared/SelectBeerType';
import ColorPickerSwitch from './ColorPickerSwitch';
import { slugify } from '../../helpers';

///////////////////////////////////////////////////////////////////////



const shortid = require('shortid');

class NewBeerForm extends React.Component {

     id = this.props.id;
     timestamp = Date.now();
     beerName = this.props.beerName;
     type_of_beer = this.props.typeOfBeer;
     brewery_name = this.props.breweryName;
     brewery_slug = this.props.brewerySlug;
     backgroundColor = this.props.backgroundColor;
     count = this.props.count;
     my_rating = this.props.defaultRating;
     beerNotes = this.props.defaultValue;
     beerABV = this.props.currentABV;
     newBeersAdded = 0;
     //editCurrentBeer = null;

     createNewBeer = (event) => {
          // 1. Stop the form from submitting
          event.preventDefault();

          let customID = this.props.id;
          console.log('SHORT ID: ' + customID);
          if( customID === undefined ) {
               customID = shortid.generate();
               console.log('SHORT ID: ' + customID);
          }

          // Make sure no fields cause "undefined" errors even if missing info
               if( this.count === undefined ) { this.count = 0; }
               if( this.type_of_beer === undefined ) { this.type_of_beer = ''; }
               if( this.brewery_name === undefined ) {
                    this.brewery_name = '';
                    this.brewery_slug = '';
               }
               if( this.backgroundColor === undefined ) { this.backgroundColor = ''; }
               if( this.beerABV === undefined ) { this.beerABV = ''; }
               if( this.my_rating === undefined ) { this.my_rating = ''; }
               if( this.description === undefined ) { this.description = ''; }

          const entry = {
                              id: customID,
                              timestamp: this.timestamp,
                              beer_name: this.beerName,
                              type_of_beer: this.type_of_beer,
                              brewery_name: this.brewery_name,
                              brewery_slug: this.brewery_slug,
                              backgroundColor: this.backgroundColor,
                              count: this.count,
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

     getTypeOfBeer = (selectedOption) => {
          console.log('getTypeOfBeer');
          if(selectedOption) {
               this.type_of_beer = selectedOption.label;
               this.props.addNewTypeOfBeer(selectedOption.label);
          } else {
               this.type_of_beer = '';
          }
     }

     getBrewery = (selectedOption) => {
          console.log('getBrewery');
          if(selectedOption) {
               this.brewery_slug = slugify(selectedOption.label);
               this.brewery_name = selectedOption.label;
          }
     }

     setRating = (selectedOption) => {
          if(selectedOption) {
               this.my_rating = selectedOption.value;
          }
     }

     handleColorChangeComplete = (color, event) => {
          this.backgroundColor = color.hex;
       };


  manualHexSelection = (event) => {
       this.backgroundColor = '#' + (event.target.value);
       console.log(this.backgroundColor);
  }


render() {

     const beerList = this.props.beerList;
     const breweries = this.props.breweries;
     const beerTypes = this.props.beerTypes;
     console.log( beerTypes );

     let beerName = this.props.beerName;
     let currentABV = this.props.currentABV;

     let actionButtonText = this.props.actionButtonText;
     if( !actionButtonText ) { actionButtonText = 'Add New Beer'; }

     let defaultValue = this.props.defaultValue;
     if( !defaultValue ) { defaultValue = ''; }
     console.log( defaultValue );


     let defaultBeerType = this.props.typeOfBeer;

     let defaultBrewery = this.props.defaultBrewery;
     let defaultRating = this.props.defaultRating;

     let defaultColor = this.props.backgroundColor;

     let edit = this.props.edit;
     let placeholder='Notes';
     if( !edit ) {
          placeholder='Description';
     }

     this.newBeersAdded++;

       return (
            <>
            <div className="new-beer-area">
            {((this.newBeersAdded < 2 && edit === true) || edit !== true ) &&

               <form className="new-beer" onSubmit={this.createNewBeer} >
               <p className="intro-explainer-adding-a-brewery">If you're adding a beer from a new brewery, make sure you <span className="add-brewery-first">add the brewery first</span>. Then you'll be ready to go!</p>
                    <div className="clb-new-beer-title">
                        <NameOfBeer getBeerName={this.getBeerName} beerName={beerName}/>
                   </div>
                         <div className="clb-left-align">
                         <div className="clb-flex-row-two-thirds">
                              <SelectBeerType
                                   beerTypes={beerTypes}
                                   getTypeOfBeer={this.getTypeOfBeer}
                                   defaultBeerType={defaultBeerType}
                                   edit={edit}
                                   addNewTypeOfBeer={this.props.addNewTypeOfBeer}
                              />
                              <BeerABV getABV={this.getABV} currentABV={currentABV} />
                         </div>
                              <div className="clb-flex-row-two-thirds clb-extra-margin-top">
                                   <SelectBrewery breweries={breweries} getBrewery={this.getBrewery} edit={edit} defaultBrewery={defaultBrewery} />
                                   <SelectRating setRating={this.setRating} reset={this.reset} edit={edit} defaultRating={defaultRating} />
                              </div>
                        </div>
                   <Description placeholder={placeholder} defaultValue={defaultValue} getNotes={this.getBeerDescription} edit={edit} />
                   <ColorPickerSwitch defaultColor={defaultColor} onChangeComplete={ this.handleColorChangeComplete } manualHexSelection={this.manualHexSelection} />

                   <Button variant="contained" color="secondary" type="submit">{actionButtonText}</Button>
              </form>

         }

         {(this.newBeersAdded >= 2 && edit === true) &&
             <div className="successful-edit-message">You successfully edited this beer!</div>
           }

         </div>

              {(this.newBeersAdded > 1 && edit !== true) &&
             <div className="successful-added-message">You added a new beer!</div>
           }

         </>
       );
     }

}


export default NewBeerForm;
