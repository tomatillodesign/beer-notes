import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
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
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
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

     //const test = getBrewery( 'Testing 123' );

     const breweries = props.breweries;

     var result = breweries.find(obj => {
       return obj.brewery_slug === brewerySlug
     });
     console.log("FOUND BREWERY: " + result);


     return (
         <Card className={classes.card}>
             <CardMedia
               className={classes.media}
               image="http://www.tomatillodesign.com/wp-content/uploads/2019/12/beer01.jpg"
               title="Beer!"
             />
             <CardContent>
               <Typography gutterBottom variant="h5" component="h2">
                 {beerName}
               </Typography>
               <Typography variant="overline" display="block" gutterBottom>
                  {result.brewery}
                </Typography>
               <Typography variant="body2" color="textSecondary" component="p">
                 {description}
               </Typography>
             </CardContent>
             <CardActions>
             <ExampleModal beerName={beerName}/>
                  <Button variant="outlined" disabled>
                    {myRating}
                 </Button>
           </CardActions>
    </Card>

       );

}
