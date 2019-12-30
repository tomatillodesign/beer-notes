import React, { Component } from 'react';
import Select from 'react-select';
import { usStates, countries } from '../../data/usstates.js';

class SelectUSState extends React.Component {

     constructor(props) {
          super(props);
     }

     componentDidMount() {



     }


     render() {

          const countryObjs = countries.map(country => (
               {
                   value: country,
                   label: country
              }
          ));
          //console.log(countryObjs);

          const selectedState = this.props.selectedState;
          console.log(selectedState);

          const listToPublish = usStates.concat(countryObjs);

          let selectedToDisplay = null;
          if( selectedState !== null ) {
               selectedToDisplay = { value: selectedState, label: selectedState};
          }

          return(
            <Select
               placeholder='Select State or Country'
               options={listToPublish}
               value={selectedToDisplay}
               isClearable
               isSearchable
               onChange={this.props.getBreweryState}
             />
        );

     }

}

export default SelectUSState;
