import React from 'react';
import BeerCard from './BeerCard';

class NewBeerCards extends React.Component {

     render() {

          const beerList = this.props.beerList;
          const breweries = this.props.breweries;
          const beerLog = this.props.beerLog;
          const addNewBeer = this.props.addNewBeer;

          //console.log(beerList);

          const alphabeticalBeers = [...beerList].sort((a, b) => (a.beer_name > b.beer_name) ? 1 : -1);
          console.log(alphabeticalBeers);

          return (
               <div className="clb-beer-card-area">
                    { Object.keys(alphabeticalBeers).map(key => <BeerCard beer={alphabeticalBeers[key]} key={key} beerList={beerList} breweries={breweries} beerLog={beerLog} addNewBeer={addNewBeer} />) }
               </div>
               );
     }

}

export default NewBeerCards;
