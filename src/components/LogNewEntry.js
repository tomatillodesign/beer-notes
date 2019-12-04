import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';

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

       return (
            <div className="log-new-entry">
               <form className="new-entry" onSubmit={this.createNewEntry} >
                   <BeerLogDate getEntryDate={this.getEntryDate} />
                   <div className="clb-two-col">
                        <SelectBeer beerList={beerList} getBeerType={this.getBeerType} />
                        <SelectBrewery beerList={beerList} getBrewery={this.getBrewery} />
                   </div>
                   <BeerLogNotes getNotes={this.getNotes} />
                   <button type="submit">Submit Entry</button>
              </form>
         </div>
       );
     }

}


export default LogNewEntry;
