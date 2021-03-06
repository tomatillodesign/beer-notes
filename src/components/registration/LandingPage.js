import React from 'react';
import PropTypes from 'prop-types';

// my components
import Login from './Login';
import Register from './Register';
import Logout from './Logout';

// styles & additional packages
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#45484d',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#478e6e',
      main: '#478e6e',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#FFF',
    },
    // error: will use the default color
  },

  typography: {
   fontFamily: [
      'Open Sans',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
   ].join(','),
  },

});


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

export default function LandingPage(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


       return (
            <div className="App">
            <MuiThemeProvider theme={theme}>
         <div className={classes.root}>
           <AppBar position="static">
                <Typography variant="h1" className={classes.title + " clb-header"}>
                 Welcome to the Beer Journal
               </Typography>
             <Tabs className="clb-landing-tabs" value={value} onChange={handleChange} aria-label="simple tabs example">
               <Tab label="Login" {...a11yProps(0)} />
               <Tab label="Register" {...a11yProps(1)} />
             </Tabs>
           </AppBar>
           <TabPanel value={value} index={0}>
             <Login authenticateUser={props.authenticateUser} loginError={props.loginError} />
           </TabPanel>
           <TabPanel value={value} index={1}>
               <Register registerNewUser={props.registerNewUser} />
             </TabPanel>
         </div>

         </MuiThemeProvider>
         </div>
       );
     }
