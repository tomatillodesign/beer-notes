import React, { Component } from 'react';
import Select from 'react-select';
import { usStates } from '../../data/usstates.js';

class SelectUSState extends React.Component {
render() {

     return(
       <Select
          placeholder='Select'
          options={usStates}
          isClearable
          isSearchable
          onChange={this.props.getBreweryState}
        />
   );

}

}

export default SelectUSState;
