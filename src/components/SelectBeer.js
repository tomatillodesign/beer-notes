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
          console.log(completeBeerList);

          Object.keys(completeBeerList).forEach(key => {
            let value = completeBeerList[key];
            //use key and value here
            console.log(value);
            console.log(value.beers);

               let beersArray = value.beers;

                 for (let j = 0; j < beersArray.length; j++) {
                      console.log(beersArray[j].beer_name);
                      options.push( {value: beersArray[j].beer_name, label: beersArray[j].beer_name } );
                 }

          });

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
