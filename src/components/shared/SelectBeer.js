import React, { Component } from 'react';
import Select from 'react-select';

class SelectBeer extends React.Component {

     constructor(props) {
          super(props);

          this.getBeers = this.getBeers.bind(this);

     }

     getBeers() {

          const completeBeerList = this.props.beerList;
          const breweries = this.props.breweries;
          const options = [];
          for (let j = 0; j < completeBeerList.length; j++) {
               options.push( {value: completeBeerList[j].beer_name, label: completeBeerList[j].beer_name + " (" + completeBeerList[j].brewery_name + ")" } );
            }

          const alphabeticalBeers = [...options].sort((a, b) => (a.label > b.label) ? 1 : -1);

          return alphabeticalBeers;

     }

render() {

     let currentBeerOptions = this.getBeers();

     return(
       <Select
          placeholder='Select Beer'
          onChange={this.props.getBeerType}
          options={currentBeerOptions}
          isClearable
          isSearchable
        />
   );

}

}

export default SelectBeer;
