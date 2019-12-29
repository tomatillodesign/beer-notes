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
          const breweries = this.props.breweries;
          const options = [];
          for (let j = 0; j < completeBeerList.length; j++) {
               options.push( {value: completeBeerList[j].beer_name, label: completeBeerList[j].beer_name + " (" + completeBeerList[j].brewery_name + ")" } );
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
         this.props.getBeerType(selectedOption);
         this.setValue(selectedOption);
    }

    handleClick = () => {
         this.setValue(null);
         console.log("Set Value: NULL");
    };

render() {

     let currentBeerOptions = this.getBeers();
     console.log(this.state.value);

     let test = { value: 'Test', label: 'Test Label' };

     return(

          <>
          <button type="button" onClick={this.handleClick}>
            Reset value
          </button>

       <Select
          placeholder='Select Beer'
          onChange={this.props.getBeerType}
          options={currentBeerOptions}
          value={this.state.value}
          isClearable
          isSearchable
        />

        </>
   );

}

}

export default SelectBeer;
