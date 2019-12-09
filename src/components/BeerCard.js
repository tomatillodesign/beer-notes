import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LogEntry from './LogEntry';
import { getBrewery } from '../helpers';

import ExampleModal from './ExampleModal';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function BeerCard(props) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



     // get props and set variables
     const beerName = props.beer.beer_name;
     const description = props.beer.description;
     const brewerySlug = props.beer.brewery_slug;
     const myRating = props.beer.my_rating;
     const beerABV = props.beer.abv;
     console.log("---------------" + beerName + "----------------");

     const breweries = props.breweries;
     const beerLog = props.beerLog;
     console.log(brewerySlug);

     var getBreweryObj = breweries.find(obj => {
       return obj.brewery_slug === brewerySlug
     });
     console.log("Brewery OBJ" + JSON.stringify(getBreweryObj));

     var getLogObj = beerLog.filter(obj => {
       return obj.beer === beerName
     });
     //console.log("LOG OBJ" + JSON.stringify(getLogObj));

     let breweryToPublish = null;
     let breweryName = null;
     if(getBreweryObj) {
          breweryToPublish = <Typography variant="overline" display="block" gutterBottom>
        {getBreweryObj.brewery}
      </Typography>;

          breweryName = getBreweryObj.brewery;
     }

     let isActiveClass = 'inactive';
     let logCount = 0;
     if( getLogObj.length > 0 ) {
          //console.log(getLogObj);
          logCount = getLogObj.length;
          isActiveClass = 'active';
     }

     const matchingLogNotes = getLogObj;

     return (
         <Card className={classes.card + ' clb-single-beer-card ' + isActiveClass} elevation={2} >
             <img src="http://www.tomatillodesign.com/wp-content/uploads/2019/12/beer01.jpg" />
             <CardContent>
               <Typography gutterBottom variant="h5" component="h2">
                 {beerName}
               </Typography>
               {breweryToPublish}
               <Typography variant="body2" color="textSecondary" component="p">
                 {description}
               </Typography>
             </CardContent>
             <CardActions>

                {myRating !== null &&
                  <Button variant="outlined" disabled>
                    {myRating}
                 </Button>}
                 {beerABV !== null &&
                  <Button variant="outlined" disabled>
                    ABV: {beerABV}
                 </Button>}

                 {logCount > 0 &&
                     <ExampleModal beerName={beerName} breweryName={breweryName} beerLog={matchingLogNotes} logCount={logCount} />
                   }
                   {logCount === 0 &&
                      <Button variant="outlined" disabled title="You haven't logged this beer yet!">
                        {logCount}
                    </Button>}
           </CardActions>
    </Card>

       );

}
