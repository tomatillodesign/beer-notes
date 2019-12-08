import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Select from 'react-select';
import Creatable, { makeCreatableSelect } from 'react-select/creatable';
import LogNewEntry from './LogNewEntry';
import LogEntry from './LogEntry';

//import { beers, domestics, completeBeerList } from '../data/beers.js';

class BeerLog extends React.Component {


render() {

     const beerList = this.props.beerList;
     const breweries = this.props.breweries;
     const beerLog = this.props.beerLog;
     console.log("UPDATED BEER LIST: " + JSON.stringify(beerList));
     //console.log("Log Entry: " + JSON.stringify(this.state.logEntries));

       return (
            <div className="beer-log-area">
               <LogNewEntry beerList={beerList} breweries={breweries} addLogEntry={this.props.addLogEntry} />
               <div className="complete-log">
                    <ul className="log-entry-area">
                         {Object.keys(beerLog).map(key => <LogEntry key={key} details={beerLog[key]} />)}
                    </ul>
               </div>
         </div>
       );
     }

}


export default BeerLog;
