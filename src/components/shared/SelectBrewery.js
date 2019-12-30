import React, { Component } from 'react';
import Select from 'react-select';
//import { beers, domestics, completeBeerList } from '../data/beers.js';

class SelectBrewery extends React.Component {

     constructor(props) {
          super(props);

          this.getBreweries = this.getBreweries.bind(this);

     }

     getBreweries() {

          const completeBreweryList = this.props.breweries;
          //console.log(completeBreweryList);
          var options = [];
          for (let j = 0; j < completeBreweryList.length; j++) {
                 options.push( {value: completeBreweryList[j].brewery_slug, label: completeBreweryList[j].brewery } );
            }

          // Object.keys(completeBeerList).forEach(key => {
          //   let brewery = completeBeerList[key];
          //   console.log(brewery);
          //   console.log(brewery.beers);
          //
          //   options.push( {value: brewery.brewery_slug, label: brewery.brewery } );
          //
          // });

          // Create a new array in alphabectical order
          const alphabeticalBreweries = [...options].sort((a, b) => (a.label > b.label) ? 1 : -1);
          return alphabeticalBreweries;

     }

     render() {

          let currentBreweryOptions = this.getBreweries();
          const edit = this.props.edit;
          const defaultBrewery = this.props.defaultBrewery;
          console.log(defaultBrewery);
          console.log(edit);

          let selectedToDisplay = null;
          if( defaultBrewery !== null ) {
               selectedToDisplay = { value: defaultBrewery, label: defaultBrewery};
          }

          return (
            <Select
               placeholder='Select Brewery'
               options={currentBreweryOptions}
               value={selectedToDisplay}
               isClearable
               isSearchable
               onChange={this.props.getBrewery}
            />
          );

     }

}

export default SelectBrewery;
