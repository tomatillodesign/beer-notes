import React from 'react';
import BeerCard from './BeerCard';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { Flipper, Flipped } from "react-flip-toolkit";
import shuffle from "lodash.shuffle";

var shortid = require('shortid');

class NewBeerCards extends React.Component {

     constructor(props){
        super(props);
        this.state = {
            data: this.props.beerList,
            flipKey: shortid.generate()
      };
    }


      btnAlphabeticalSelected = null;
      btnCountSelected = null;
      btnRecentSelected = null;
      btnRatingSelected = null;

      onChangeView = (event) => {
          // 1. Stop the form from submitting
          event.preventDefault();
          console.log(event.currentTarget.id)
          let newView = event.currentTarget.id;
          this.props.changeBeerCardView(newView);

          this.setState(({ data }) => ({
               flipKey: shortid.generate()
         }));
     }

     shuffle = () =>
         this.setState(({ data }) => ({
              flipKey: shortid.generate()
         }));

     render() {

          const beerList = this.props.beerList;
          //console.log(beerList);
          const breweries = this.props.breweries;
          const beerLog = this.props.beerLog;
          const addNewBeer = this.props.addNewBeer;
          const removeBeer = this.props.removeBeer;
          const beerTypes = this.props.beerTypes;
          var orderedBeers = null;
          const addNewTypeOfBeer = this.props.addNewTypeOfBeer;

          //console.log(beerTypes);
          //console.log(this.state.flipKey);

               if( this.props.beerCardView === 'Alphabetical') {
                    orderedBeers = [...beerList].sort((a, b) => (a.beer_name > b.beer_name) ? 1 : -1);
                    this.btnAlphabeticalSelected = 'clb-view-button selected';
                    this.btnCountSelected = 'clb-view-button';
                    this.btnRatingSelected = 'clb-view-button';
                    this.btnRecentSelected = 'clb-view-button';

               }

               if( this.props.beerCardView === 'High Count') {
                    //orderedBeers = [...beerList].sort((a, b) => (a.count < b.count) ? 1 : -1);
                    this.btnCountSelected = 'clb-view-button selected';
                    this.btnAlphabeticalSelected = 'clb-view-button';
                    this.btnRatingSelected = 'clb-view-button';
                    this.btnRecentSelected = 'clb-view-button';


                         // New sorting
                         orderedBeers = [...beerList].sort(function (a, b) {

                         	// If the first item has a higher number, move it down
                         	// If the first item has a lower number, move it up
                         	if (a.count > b.count) return -1;
                         	if (a.count < b.count) return 1;

                         	// If the count number is the same between both items, sort alphabetically
                         	// If the first item comes first in the alphabet, move it up
                         	// Otherwise move it down
                         	if (a.beer_name > b.beer_name) return 1;
               	          if (a.beer_name < b.beer_name) return -1;

                         });

               }


               if( this.props.beerCardView === 'Recently Added') {
                    //orderedBeers = [...beerList].sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1);
                    this.btnRecentSelected = 'clb-view-button selected';
                    this.btnAlphabeticalSelected = 'clb-view-button';
                    this.btnRatingSelected = 'clb-view-button';
                    this.btnCountSelected = 'clb-view-button';

                    // New sorting
                    orderedBeers = [...beerList].sort(function (a, b) {

                         // If the first item has a higher number, move it down
                         // If the first item has a lower number, move it up
                         if (a.timestamp > b.timestamp) return -1;
                         if (a.timestamp < b.timestamp) return 1;

                         // If the count number is the same between both items, sort alphabetically
                         // If the first item comes first in the alphabet, move it up
                         // Otherwise move it down
                         if (a.beer_name > b.beer_name) return 1;
                         if (a.beer_name < b.beer_name) return -1;

                    });

               }


               if( this.props.beerCardView === 'Rating') {
                    //orderedBeers = [...beerList].sort((a, b) => (a.count < b.count) ? 1 : -1);
                    this.btnRatingSelected = 'clb-view-button selected';
                    this.btnCountSelected = 'clb-view-button';
                    this.btnAlphabeticalSelected = 'clb-view-button';
                    this.btnRecentSelected = 'clb-view-button';


                         // New sorting
                         orderedBeers = [...beerList].sort(function (a, b) {

                         	// If the first item has a higher number, move it down
                         	// If the first item has a lower number, move it up
                         	if (a.my_rating > b.my_rating) return -1;
                         	if (a.my_rating < b.my_rating) return 1;

                         	// If the count number is the same between both items, sort alphabetically
                         	// If the first item comes first in the alphabet, move it up
                         	// Otherwise move it down
                         	if (a.beer_name > b.beer_name) return 1;
               	          if (a.beer_name < b.beer_name) return -1;

                         });

               }



          //console.log(orderedBeers);

          if( orderedBeers ) {

               return (

                    <div className="clb-beers">
                         <div className="clb-select-view">
                         <ButtonGroup size="small" color="secondary" aria-label="outlined primary button group">
                             <Button onClick={this.onChangeView} id="view-alphabetical" className={this.btnAlphabeticalSelected}>Alphabetical</Button>
                             <Button onClick={this.onChangeView} id="view-high-count" className={this.btnCountSelected}>High Count</Button>
                             <Button onClick={this.onChangeView} id="view-rating" className={this.btnRatingSelected}>Rating</Button>
                             <Button onClick={this.onChangeView} id="view-recently-added" className={this.btnRecentSelected}>Recently Added</Button>
                           </ButtonGroup>
                           </div>

                           <Flipper
                              flipKey={this.state.flipKey}
                              element="div"
                              className="clb-beer-card-area"
                            >
                              { this.state.data.map(({ key, beer_name, id, description }) => (
                                   <Flipped key={id}>
                                        {flippedProps =>
                                             <BeerCard
                                                  flippedProps={flippedProps}
                                                  beer={orderedBeers[key]}
                                                  key={key}
                                                  beerList={beerList}
                                                  breweries={breweries}
                                                  beerLog={beerLog}
                                                  beerTypes={beerTypes}
                                                  addNewBeer={addNewBeer}
                                                  removeBeer={removeBeer}
                                                  addNewTypeOfBeer={addNewTypeOfBeer}
                                             />}
                                   </Flipped>
                              )) }
                              </Flipper>
                    </div>
                    );

               } else {
                    return 'Please use the tabs above to add new breweries and beers.';
               }

     }

}

export default NewBeerCards;
