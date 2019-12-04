import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';

import Select from 'react-select';
import Creatable, { makeCreatableSelect } from 'react-select/creatable';

import BeerLogDate from './BeerLogDate';
import SelectBeer from './SelectBeer';
import SelectBrewery from './SelectBrewery';
import BeerLogNotes from './BeerLogNotes';

import { beers, domestics, completeBeerList } from '../data/beers.js';

class BeerLog extends React.Component {

     state = {
         completeBeerList: { completeBeerList }
       };



render() {


     const beerList = completeBeerList;
     //console.log(beerList);

       return (
            <div className="beer-log-area">
              <BeerLogDate />
              <div className="clb-two-col">
                   <SelectBeer beerList={beerList} />
                   <SelectBrewery beerList={beerList} />
              </div>
              <BeerLogNotes />
         </div>
       );
     }

}


export default BeerLog;
