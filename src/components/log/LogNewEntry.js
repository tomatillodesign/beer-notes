import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Select from 'react-select';
import Creatable, { makeCreatableSelect } from 'react-select/creatable';

import BeerLogDate from './BeerLogDate';
import SelectBeer from '../shared/SelectBeer';
//import SelectBrewery from './SelectBrewery';
import Description from '../shared/Description';
import { slugify } from '../../helpers';

class LogNewEntry extends React.Component {
     constructor(props) {
          super(props);
     }

     beerList = this.props.beerList;

     entryDate = Date.now();
     beerNotes = null;
     beerType = null
     beerID = null;
     brewery_name = null;
     brewery_slug = null;

     createNewEntry = (event) => {
          // 1. Stop the form from submitting
          event.preventDefault();

          console.log("BEER NOTES: " + this.beerNotes);

          const entry = {
               timestamp: Date.now(),
               entryDate: this.entryDate,
               beer: this.beerType,
               beerID: this.beerID,
               brewery_name: this.brewery_name,
               brewery_slug: this.brewery_slug,
               notes: this.beerNotes,
          }

          this.props.addLogEntry(entry);
          // refresh the form
          event.currentTarget.reset();
          //this.beerNotes = null;
     }

     getNotes = (event) => {
          this.beerNotes = (event.target.value);
          console.log(this.beerNotes);
     }

     getEntryDate = (date) => {
          const theUnixTime = date.getTime();
          this.entryDate = theUnixTime;
     }

     getBeerType = (selectedOption) => {
          if(selectedOption) {
               this.beerType = selectedOption.value;
               console.log(this.beerType);

               // find the beer object matching this.beerType
               // then set the brewery_slug & brewery_name from that Object
               let beerListObj = this.beerList;
               let currentBeerName = selectedOption.value;
               let currentBeerObj = beerListObj.find(obj => {
                 return obj.beer_name === currentBeerName
               })
               console.log(currentBeerObj);
               this.brewery_name = currentBeerObj.brewery_name;
               this.brewery_slug = currentBeerObj.brewery_slug;
               this.beerID = currentBeerObj.id;
               //this.setState({ selection: selectedOption.value });

          }
     }




render() {

     const beerList = this.props.beerList;
     const breweries = this.props.breweries;

       return (
            <div className="log-new-entry">
               <form className="new-entry" onSubmit={this.createNewEntry} >
                   <BeerLogDate getEntryDate={this.getEntryDate} />
                   <div className="clb-one-col">
                        <SelectBeer beerList={beerList} breweries={breweries} getBeerType={this.getBeerType} />
                   </div>
                   <Description placeholder='Notes' defaultValue={''} getNotes={this.getNotes} />
                   <Button variant="contained" color="primary" type="submit">Add Entry</Button>
              </form>
         </div>
       );
     }

}


export default LogNewEntry;