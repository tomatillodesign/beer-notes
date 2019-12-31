import React, { Component } from 'react';
import Select from 'react-select';

class SelectRating extends React.Component {

     constructor(props) {
          super(props);

     }



     render() {

          const defaultRating = this.props.defaultRating;

               var myRatingToPublish = null;
               if( defaultRating === '3' ) { myRatingToPublish = '❤️ Great'; }
               if( defaultRating === '2' ) { myRatingToPublish = '👍 Good'; }
               if( defaultRating === '1' ) { myRatingToPublish = '👎 Not Good'; }

          let defaultRatingPublish = {
               value: defaultRating,
               label: myRatingToPublish
          };
          if( defaultRating === null ) { defaultRatingPublish = null; }
          //console.log(defaultRating);

          const ratingOptions = [
               { value: '3', label: '❤️ Great' },
               { value: '2', label: '👍 Good' },
               { value: '1', label: '👎 Not Good' },
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
                    value={defaultRatingPublish}
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
