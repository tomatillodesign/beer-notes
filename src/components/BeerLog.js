import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Select from 'react-select';
import Creatable, { makeCreatableSelect } from 'react-select/creatable';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import LogNewEntry from './LogNewEntry';
import LogEntry from './LogEntry';

//import { beers, domestics, completeBeerList } from '../data/beers.js';

class BeerLog extends React.Component {


render() {

     const beerList = this.props.beerList;
     const breweries = this.props.breweries;
     const beerLog = this.props.beerLog;
     //console.log("UPDATED BEER LIST: " + JSON.stringify(beerList));
     //console.log("Log Entry: " + JSON.stringify(this.state.logEntries));

     const logEntriesByDate = [...beerLog].sort((a, b) => (a.entryDate < b.entryDate) ? 1 : -1);

       return (
            <div className="beer-log-page">
               <LogNewEntry beerList={beerList} breweries={breweries} addLogEntry={this.props.addLogEntry} />
               <div className="beer-log-area">
               <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1b-content"
                    id="panel1b-header"
                  >
                    <h3>Complete Log</h3>
                       </ExpansionPanelSummary>
                       <ExpansionPanelDetails>
                         <div className="complete-log">
                              <ul className="log-entry-area">
                                   {Object.keys(logEntriesByDate).map(key => <LogEntry key={key} details={logEntriesByDate[key]} />)}
                              </ul>
                         </div>
                       </ExpansionPanelDetails>
                </ExpansionPanel>
                </div>
         </div>
       );
     }

}


export default BeerLog;
