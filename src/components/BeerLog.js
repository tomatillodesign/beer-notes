import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';

import Select from 'react-select';
import Creatable, { makeCreatableSelect } from 'react-select/creatable';

import BeerLogDate from './BeerLogDate';
import SelectBeer from './SelectBeer';
import SelectBrewery from './SelectBrewery';
import BeerLogNotes from './BeerLogNotes';

export default function BeerLog() {

  return (
       <div className="beer-log-area">
         <BeerLogDate />
         <div className="clb-two-col">
              <SelectBeer />
              <SelectBrewery />
         </div>
         <BeerLogNotes />
    </div>
  );
}
