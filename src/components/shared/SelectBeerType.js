import React, { Component } from 'react';
import Select from 'react-select';
import Creatable, { makeCreatableSelect } from 'react-select/creatable';
import CreatableSelect from 'react-select/creatable';

class SelectBeerType extends React.Component {

     constructor(props) {
          super(props);
          this.state = {
            };
     }

     handleCreateLabel = (inputValue: any, actionMeta: any) => {
          console.log("handleCreateLabel");
          return 'Create "' + inputValue + '"';
     }


     render() {

          const beerTypes = this.props.beerTypes;
          const defaultBeerTypeRaw = this.props.defaultBeerType;
          // console.log(beerTypes);
          // console.log(defaultBeerTypeRaw);

          let beerTypesToSelect = [];
          beerTypes.forEach(value =>
               beerTypesToSelect.push({ value: value, label: value })
          );

          // console.log(beerTypesToSelect);
          // console.log(this.props.defaultBeerType);

          if( defaultBeerTypeRaw !== null ) {

               const defaultBeerTypeSelect = { value: defaultBeerTypeRaw, label: defaultBeerTypeRaw }

               return (
                 <CreatableSelect
                    placeholder='Type of Beer'
                    options={beerTypesToSelect}
                    defaultValue={defaultBeerTypeSelect}
                    isClearable
                    isSearchable
                    formatCreateLabel={this.handleCreateLabel}
                    onChange={this.props.getTypeOfBeer}
                 />
               );

          } else {

               return (
                 <CreatableSelect
                      placeholder='Type of Beer'
                      options={beerTypesToSelect}
                    isClearable
                    isSearchable
                    value={null}
                    formatCreateLabel={this.handleCreateLabel}
                    onChange={this.props.getTypeOfBeer}
                 />
               );

          }

     }

}

export default SelectBeerType;
