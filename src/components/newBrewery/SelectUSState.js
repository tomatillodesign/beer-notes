import React, { Component } from 'react';
import Select from 'react-select';
import { usStates } from '../../data/usstates.js';

class SelectUSState extends React.Component {

     constructor(props) {
          super(props);
     }


     render() {

          const selectedState = this.props.selectedState;
          console.log(selectedState);

          let selectedToDisplay = null;
          if( selectedState !== null ) {
               selectedToDisplay = { value: selectedState, label: selectedState};
          }

          return(
            <Select
               placeholder='Select'
               options={usStates}
               value={selectedToDisplay}
               isClearable
               isSearchable
               onChange={this.props.getBreweryState}
             />
        );

     }

}

export default SelectUSState;
