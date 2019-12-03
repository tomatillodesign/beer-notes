import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: 'new_belgium', label: 'New Belgium' },
  { value: 'fullsteam', label: 'Fullsteam' }
]

const SelectBrewery = () => (
  <Select
     placeholder='Select Brewery'
     options={options}
     isClearable
     isSearchable
  />
)

export default SelectBrewery;
