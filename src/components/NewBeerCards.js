import React from 'react';
import BeerCard from './BeerCard';

class NewBeerCards extends React.Component {

     render() {

          const beerList = this.props.beerList;
          const breweries = this.props.breweries;
          const beerLog = this.props.beerLog;

          console.log(beerList);

          const alphabeticalBeers = [...beerList].sort((a, b) => (a.beer_name > b.beer_name) ? 1 : -1);

          return (
               <div className="clb-beer-card-area">
                    { Object.keys(alphabeticalBeers).map(key => <BeerCard beer={alphabeticalBeers[key]} key={key} breweries={breweries} beerLog={beerLog} />) }
               </div>
               );
     }

}

export default NewBeerCards;
