import React, { Component } from 'react';
import Select from 'react-select';

class SelectRating extends React.Component {

     constructor(props) {
          super(props);

     }



     render() {

          const ratingOptions = [
               { value: 'Great', label: 'Great' },
               { value: 'Good', label: 'Good' },
               { value: 'Not Good', label: 'Not Good' },
          ];


               return (
                 <Select
                    placeholder='Rating'
                    options={ratingOptions}
                    isClearable
                    isSearchable
                    onChange={this.props.setRating}
                 />
               );
               

     }

}

export default SelectRating;
