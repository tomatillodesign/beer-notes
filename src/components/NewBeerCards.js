import React from 'react';
import BeerCard from './BeerCard';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class NewBeerCards extends React.Component {

     state = {
         viewType: 'alphabetical'
       };

      btnAlphabeticalSelected = 'clb-view-button selected';
      btnCountSelected = 'clb-view-button';
      btnRecentSelected = 'clb-view-button';

     setAlphabeticalView = (event) => {
          event.preventDefault();
          this.setState({ viewType: 'alphabetical' });
          this.btnAlphabeticalSelected = 'clb-view-button selected';
          this.btnCountSelected = 'clb-view-button';
          this.btnRecentSelected = 'clb-view-button';
          console.log('setAlphabeticalView');
     }

     setRecentView = (event) => {
          event.preventDefault();
          this.setState({ viewType: 'recent' });
          this.btnRecentSelected = 'clb-view-button selected';
          this.btnAlphabeticalSelected = 'clb-view-button';
          this.btnCountSelected = 'clb-view-button';
          console.log('setRecentView');
     }

     setCountView = (event) => {
          event.preventDefault();
          this.setState({ viewType: 'count' });
          this.btnCountSelected = 'clb-view-button selected';
          this.btnAlphabeticalSelected = 'clb-view-button';
          this.btnRecentSelected = 'clb-view-button';
          console.log('setCountView');
     }



     render() {

          const beerList = this.props.beerList;
          const breweries = this.props.breweries;
          const beerLog = this.props.beerLog;
          const addNewBeer = this.props.addNewBeer;
          const removeBeer = this.props.removeBeer;

          const btnSelected = true;
          console.log(this.state.viewType);

          let orderedBeers = [...beerList].sort((a, b) => (a.beer_name > b.beer_name) ? 1 : -1);
          if( this.state.viewType === 'recent') {
               orderedBeers = [...beerList].sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1);
          }
          if( this.state.viewType === 'count') {
               orderedBeers = [...beerList].sort((a, b) => (a.count < b.count) ? 1 : -1);
          }
          console.log(orderedBeers);

          return (
               <>
               <div className="clb-select-view">
               <ButtonGroup size="small" color="secondary" aria-label="outlined primary button group">
                   <Button onClick={this.setAlphabeticalView} className={this.btnAlphabeticalSelected}>Alphabetical</Button>
                   <Button onClick={this.setCountView} className={this.btnCountSelected}>High Count</Button>
                   <Button onClick={this.setRecentView} className={this.btnRecentSelected}>Recently Added</Button>
                 </ButtonGroup>
                 </div>


                 <div className="clb-beer-card-area">
                    { Object.keys(orderedBeers).map(key => <BeerCard beer={orderedBeers[key]} key={key} beerList={beerList} breweries={breweries} beerLog={beerLog} addNewBeer={addNewBeer} removeBeer={removeBeer} />) }
               </div>


               </>
               );
     }

}

export default NewBeerCards;
