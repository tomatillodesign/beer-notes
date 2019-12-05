import React, { Component } from 'react';
import Select from 'react-select';
//import { beers, domestics, completeBeerList } from '../data/beers.js';

class SelectBrewery extends React.Component {

     constructor(props) {
          super(props);

          this.getBreweries = this.getBreweries.bind(this);

     }

     getBreweries() {

          const completeBeerList = this.props.beerList;
          var options = [];

          Object.keys(completeBeerList).forEach(key => {
            let brewery = completeBeerList[key];
            console.log(brewery);
            console.log(brewery.beers);

            options.push( {value: brewery.brewery_slug, label: brewery.brewery } );

          });

          // Create a new array in alphabectical order
          const alphabeticalBreweries = [...options].sort((a, b) => (a.label > b.label) ? 1 : -1);

          return alphabeticalBreweries;

     }

     render() {

          let currentBreweryOptions = this.getBreweries();

          return (
            <Select
               placeholder='Select Brewery'
               options={currentBreweryOptions}
               isClearable
               isSearchable
               onChange={this.props.getBrewery}
            />
          );

     }

}

export default SelectBrewery;
