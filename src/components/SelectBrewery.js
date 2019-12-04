import React, { Component } from 'react';
import Select from 'react-select';
import { beers, domestics, completeBeerList } from '../data/beers.js';

var options = [];

console.log(completeBeerList);

Object.keys(completeBeerList).forEach(key => {
  let brewery = completeBeerList[key];
  console.log(brewery);
  console.log(brewery.beers);

  options.push( {value: brewery.brewery_slug, label: brewery.brewery } );

});

// for (let i = 0; i < completeBeerList.length; i++) {
//      options.push( {value: completeBeerList[i].brewery_slug, label: completeBeerList[i].brewery } );
//      console.log(completeBeerList[i].brewery);
// }

// Create a new array in alphabectical order
const alphabeticalBreweries = [...options].sort((a, b) => (a.label > b.label) ? 1 : -1);


const SelectBrewery = () => (
  <Select
     placeholder='Select Brewery'
     options={alphabeticalBreweries}
     isClearable
     isSearchable
  />
)

export default SelectBrewery;
