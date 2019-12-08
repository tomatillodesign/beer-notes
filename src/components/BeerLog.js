import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Select from 'react-select';
import Creatable, { makeCreatableSelect } from 'react-select/creatable';
import LogNewEntry from './LogNewEntry';
import LogEntry from './LogEntry';

//import { beers, domestics, completeBeerList } from '../data/beers.js';

class BeerLog extends React.Component {

     // state = {
     //     logEntries: {}
     //   };
     //
     //
     //   addLogEntry = (logEntry) => {
     //       // 1. take a copy of existing state
     //       const logEntries = { ...this.state.logEntries };
     //       // 2. add our new fish to that fishes variable
     //       logEntries[`logEntry_${Date.now()}`] = logEntry;
     //       // 3. Set the new fishes object to state
     //       this.setState({
     //            logEntries: logEntries
     //       })
     //  }


render() {

     const beerList = this.props.beerList;
     const breweries = this.props.breweries;
     const beerLog = this.props.beerLog;
     console.log("UPDATED BEER LIST: " + JSON.stringify(beerList));
     //console.log("Log Entry: " + JSON.stringify(this.state.logEntries));

       return (
            <div className="beer-log-area">
               <LogNewEntry beerList={beerList} breweries={breweries} addLogEntry={this.props.addLogEntry} />
               <ul className="log-entry-area">
                    {Object.keys(beerLog).map(key => <LogEntry key={key} details={beerLog[key]} />)}
               </ul>
         </div>
       );
     }

}


export default BeerLog;
