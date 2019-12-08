import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Select from 'react-select';
import Creatable, { makeCreatableSelect } from 'react-select/creatable';

import BeerLogDate from './BeerLogDate';
import SelectBeer from './SelectBeer';
import SelectBrewery from './SelectBrewery';
import BeerLogNotes from './BeerLogNotes';

class LogNewEntry extends React.Component {

     entryDate = Date.now();
     beerNotes = null;
     beerType = null;
     brewery = null;

     createNewEntry = (event) => {
          // 1. Stop the form from submitting
          event.preventDefault();
          const entry = {
               timestamp: Date.now(),
               entryDate: this.entryDate,
               beer: this.beerType,
               brewery: this.brewery,
               notes: this.beerNotes,
          }

          console.log(entry);
          this.props.addLogEntry(entry);
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
     const breweries = this.props.breweries;
     //console.log("LOG NEW ENTRY" + JSON.stringify(beerList));

       return (
            <div className="log-new-entry">
               <form className="new-entry" onSubmit={this.createNewEntry} >
                   <BeerLogDate getEntryDate={this.getEntryDate} />
                   <div className="clb-two-col">
                        <SelectBeer beerList={beerList} getBeerType={this.getBeerType} />
                        <SelectBrewery breweries={breweries} getBrewery={this.getBrewery} />
                   </div>
                   <BeerLogNotes placeholder='Notes' getNotes={this.getNotes} />
                   <Button variant="contained" color="primary" type="submit">Add Entry</Button>
              </form>
         </div>
       );
     }

}


export default LogNewEntry;
