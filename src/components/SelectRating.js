import React, { Component } from 'react';
import Select from 'react-select';

class SelectRating extends React.Component {

     constructor(props) {
          super(props);

     }



     render() {

          const defaultRating = this.props.defaultRating;
          const defaultRatingPublish = {
               value: defaultRating,
               label: defaultRating
          };
          console.log(defaultRating);

          const ratingOptions = [
               { value: '❤️', label: '❤️ Great' },
               { value: '👍', label: '👍 Good' },
               { value: '👎', label: '👎 Not Good' },
          ];

          if( defaultRating ) {

               return (
                 <Select
                    placeholder='Rating'
                    options={ratingOptions}
                    defaultValue={defaultRatingPublish}
                    isClearable
                    isSearchable
                    onChange={this.props.setRating}
                 />
               );

          } else {

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

}

export default SelectRating;
