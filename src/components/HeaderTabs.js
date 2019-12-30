import React from 'react';
import PropTypes from 'prop-types';

import BeerLog from './log/BeerLog';
import NewBeerForm from './newBeer/NewBeerForm';
import NewBreweryForm from './newBrewery/NewBreweryForm';
import NewBeerCards from './beers/NewBeerCards';
import AccountSettings from './registration/AccountSettings';

import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function HeaderTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // console.log(props.beerList.length);
  // console.log("loggedInEmail: " + props.loggedInEmail);
  //console.log("beerTypes: " + props.beerTypes);

  return (
       <div className={classes.root} id="main-content-area">
      <AppBar position="static" >
           <Typography variant="h1" className={classes.title + " clb-header"}>
            My Beer Journal
          </Typography>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="My Beers" {...a11yProps(0)} />
          <Tab label="New Entry" {...a11yProps(1)} />
          <Tab label="New Beer" {...a11yProps(2)} />
          <Tab label="New Brewery" {...a11yProps(3)} />
          <Tab label="Account" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      { props.beerList.length > 0 ?
            <NewBeerCards
               beerList={props.beerList}
               breweries={props.breweries}
               beerLog={props.beerLog}
               removeLogEntry={props.removeLogEntry}
               beerTypes={props.beerTypes}
               addNewBeer={props.addNewBeer}
               removeBeer={props.removeBeer}
               beerCardView={props.beerCardView}
               changeBeerCardView={props.changeBeerCardView}
               addNewTypeOfBeer={props.addNewTypeOfBeer}
                />
           :
          <div className="new-entry welcome-explainer">
               <div>Welcome to your new Beer Journal! Use the tabs at the top to add new breweries, beers, and journal entries anytime you grab a drink.</div>
               <div>Over time, you'll build up a nice collection. Cheers! 🍻</div>
               <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => setValue(3)}
                    id="get-started-button">
                    Click here to get started with a new brewery
               </Button>
          </div>

      }
      </TabPanel>
      <TabPanel value={value} index={1}>
          <h2>New Journal Entry</h2>
        <BeerLog
               beerList={props.beerList}
               breweries={props.breweries}
               beerLog={props.beerLog}
               addLogEntry={props.addLogEntry}
               removeLogEntry={props.removeLogEntry}
          />
      </TabPanel>
      <TabPanel value={value} index={2}>
          <h2>Add New Beer</h2>
               <NewBeerForm
                    beerList={props.beerList}
                    addNewBeer={props.addNewBeer}
                    breweries={props.breweries}
                    beerTypes={props.beerTypes}
                    addNewTypeOfBeer={props.addNewTypeOfBeer}
               />
      </TabPanel>
      <TabPanel value={value} index={3}>
          <h2>Add New Brewery</h2>
         <NewBreweryForm addNewBrewery={props.addNewBrewery} />
      </TabPanel>
      <TabPanel value={value} index={4}>
          <AccountSettings
               logOutUser={props.logOutUser}
               loggedInEmail={props.loggedInEmail}
               permanentlyDeleteUserAndInfo={props.permanentlyDeleteUserAndInfo}
          />
      </TabPanel>
      </div>
  );
}
