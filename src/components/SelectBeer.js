import React, { Component } from 'react';
import Select from 'react-select';
import { beers, domestics, completeBeerList } from '../data/beers.js';

// const options = [
//   { value: 'fat_tire', label: 'Fat Tire' },
//   { value: 'blue_moon', label: 'Blue Moon' },
//   { value: 'rocket_science', label: 'Rocket Science' }
// ]

var options = [];

console.log(completeBeerList);

for (let i = 0; i < completeBeerList.length; i++) {

     let beers = completeBeerList[i].beers;
     for (let j = 0; j < beers.length; j++) {
          options.push( {value: beers[j].beer_name, label: beers[j].beer_name } );
     }
}

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
