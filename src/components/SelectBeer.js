import React, { Component } from 'react';
import Select from 'react-select';
import { beers, domestics, completeBeerList } from '../data/beers.js';

var options = [];

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



//
// for (let i = 0; i < completeBeerList.length; i++) {
//
//      let beers = completeBeerList[i].beers;
//      for (let j = 0; j < beers.length; j++) {
//           options.push( {value: beers[j].beer_name, label: beers[j].beer_name } );
//      }
// }

// Create a new array in alphabectical order
const alphabeticalBeers = [...options].sort((a, b) => (a.label > b.label) ? 1 : -1);

const SelectBeer = () => (
  <Select
     placeholder='Select Beer'
     options={alphabeticalBeers}
     isClearable
     isSearchable
   />
)

export default SelectBeer;
