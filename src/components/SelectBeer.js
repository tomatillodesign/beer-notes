import React, { Component } from 'react';
import Select from 'react-select';
//import { beers, domestics, completeBeerList } from '../data/beers.js';

class SelectBeer extends React.Component {

     constructor(props) {
          super(props);

          this.getBeers = this.getBeers.bind(this);

     }

     getBeers() {

          const completeBeerList = this.props.beerList;
          const options = [];
          for (let j = 0; j < completeBeerList.length; j++) {
                 console.log(completeBeerList[j].beer_name);
                 options.push( {value: completeBeerList[j].beer_name, label: completeBeerList[j].beer_name } );
            }

          const alphabeticalBeers = [...options].sort((a, b) => (a.label > b.label) ? 1 : -1);
          return alphabeticalBeers;

     }

render() {

     let currentBeerOptions = this.getBeers();
     console.log(currentBeerOptions);

     return(
       <Select
          placeholder='Select Beer'
          options={currentBeerOptions}
          isClearable
          isSearchable
          onChange={this.props.getBeerType}
        />
   );

}

}

export default SelectBeer;
