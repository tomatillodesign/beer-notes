import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: 'fat_tire', label: 'Fat Tire' },
  { value: 'blue_moon', label: 'Blue Moon' },
  { value: 'rocket_science', label: 'Rocket Science' }
]

const SelectBeer = () => (
  <Select
     placeholder='Select Beer'
     options={options}
     isClearable
     isSearchable
   />
)

export default SelectBeer;
