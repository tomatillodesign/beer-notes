import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import BeerHome from './BeerHome';
import BeerLog from './BeerLog';
import NewBeerForm from './NewBeerForm';
import NewBreweryForm from './NewBreweryForm';
import NewBeerCards from './NewBeerCards';

import { createMuiTheme } from '@material-ui/core/styles';

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

export default function NotFound(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
           <Typography variant="h1" className={classes.title + " clb-header"}>
            Welcome to the Beer Journal
          </Typography>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="Sorry, not found" {...a11yProps(0)} />
          <Tab label="Login" {...a11yProps(1)} />
          <Tab label="Register" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <h2>Sorry, we couldn't find it. Click the tabs above to login or register a new journal.</h2>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h2>Login to the App here</h2>
      </TabPanel>
      <TabPanel value={value} index={2}>
          <h2>Register Here</h2>
        </TabPanel>
    </div>
  );
}
