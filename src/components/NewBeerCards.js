import React from 'react';
import BeerCard from './BeerCard';

class NewBeerCards extends React.Component {

     render() {

          const beerList = this.props.beerList;

          return (
               <div className="clb-beer-card-area">
                    { Object.keys(beerList).map(key => <BeerCard beer={beerList[key]} key={key} />) }
               </div>
               );
     }

}

export default NewBeerCards;
