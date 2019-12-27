import React, { Component } from 'react';
import Select from 'react-select';
import { beerTypes } from '../../data/beers.js';

class SelectBeerType extends React.Component {

     constructor(props) {
          super(props);

     }



     render() {

          const defaultBeerTypeRaw = this.props.defaultBeerType;
          console.log(defaultBeerTypeRaw);

          let beerTypesToSelect = [];
          beerTypes.forEach(value =>
               beerTypesToSelect.push({ value: value, label: value })
          );

          // console.log(beerTypesToSelect);
          // console.log(this.props.defaultBeerType);

          if( defaultBeerTypeRaw !== '' ) {

               const defaultBeerTypeSelect = { value: defaultBeerTypeRaw, label: defaultBeerTypeRaw }

               return (
                 <Select
                    placeholder='Type of Beer'
                    options={beerTypesToSelect}
                    defaultValue={defaultBeerTypeSelect}
                    isClearable
                    isSearchable
                    onChange={this.props.getTypeOfBeer}
                 />
               );

          } else {

               return (
                 <Select
                      placeholder='Type of Beer'
                      options={beerTypesToSelect}
                    isClearable
                    isSearchable
                    onChange={this.props.getTypeOfBeer}
                 />
               );

          }

     }

}

export default SelectBeerType;
