import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';

import Select from 'react-select';
import Creatable, { makeCreatableSelect } from 'react-select/creatable';

import SelectBrewery from './SelectBrewery';
import BeerLogNotes from './BeerLogNotes';

class NewBeerForm extends React.Component {

     timestamp = Date.now();
     beerName = null;
     brewery = null;
     beerNotes = null;

     createNewBeer = (event) => {
          // 1. Stop the form from submitting
          event.preventDefault();
          const entry = {
               timestamp: Date.now(),
               beerName: this.beerName,
               brewery: this.brewery,
               notes: this.beerNotes,
          }

          console.log(entry);
          this.props.addNewBeer(entry);
          // refresh the form
          event.currentTarget.reset();
     }

     getNotes = (event) => {
          this.beerNotes = (event.target.value);
     }

     getEntryDate = (date) => {
          this.entryDate = date;
          console.log("ENTRY DATE: " + this.entryDate);
     }

     getBeerType = (selectedOption) => {
          if(selectedOption) {
               this.beerType = selectedOption.value;
          }
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
                   <div className="clb-two-col">
                        <SelectBrewery beerList={beerList} getBrewery={this.getBrewery} />
                   </div>
                   <BeerLogNotes placeholder='Description' getDescription={this.getDescription} />
                   <button type="submit">Submit Entry</button>
              </form>
         </div>
       );
     }

}


export default NewBeerForm;
