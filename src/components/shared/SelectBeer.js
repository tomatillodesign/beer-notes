import React, { Component } from 'react';
import Select from 'react-select';

class SelectBeer extends React.Component {

     constructor(props) {
          super(props);

          this.state = {
               select: {
                  value: null,
                  label: null
                }
          }

          this.getBeers = this.getBeers.bind(this);

     }

     getBeers() {

          const completeBeerList = this.props.beerList;
          //console.log(completeBeerList);
          const breweries = this.props.breweries;
          const options = [];
          for (let j = 0; j < completeBeerList.length; j++) {
               options.push( {value: completeBeerList[j].id, label: completeBeerList[j].beer_name + " (" + completeBeerList[j].brewery_name + ")" } );
            }

          const alphabeticalBeers = [...options].sort((a, b) => (a.label > b.label) ? 1 : -1);

          return alphabeticalBeers;

     }

     setValue = value => {
         this.setState(prevState => ({
              select: {
                value: value,
                label: value
              }
         }));
    };

    handleChange = (selectedOption) => {
         this.props.getbeerName(selectedOption);
         this.setValue(selectedOption);
    }

render() {

     let currentBeerOptions = this.getBeers();

     const selectedBeer = this.props.selectedBeerName;
     //console.log(selectedBeer);
     let selectedToDisplay = null;
     if( selectedBeer !== null ) {
          selectedToDisplay = { value: selectedBeer, label: selectedBeer};
     }

     // console.log("selectedBeer: " + selectedBeer);
     // console.log("selectedToDisplay: " + JSON.stringify(selectedToDisplay));

     return(
       <Select
          placeholder='Select Beer'
          onChange={this.handleChange}
          options={currentBeerOptions}
          value={selectedToDisplay}
          isClearable
          isSearchable
        />
   );

}

}

export default SelectBeer;
