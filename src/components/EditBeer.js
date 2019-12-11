import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NewBeerForm from './NewBeerForm';
import { hexToRgbA } from '../helpers';

export default function EditBeer(props) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const beerLog = props.beerLog;
  const breweries = props.breweries;
  const beerObj = props.beerObj;
  const beerName = props.beerName;
  const currentABV = beerObj.abv;
  const addNewBeer = props.addNewBeer;
  const editCurrentBeer=props.editCurrentBeer;
  const removeBeer=props.removeBeer;
  const backgroundColor=props.backgroundColor;

  const backgroundRGBA = hexToRgbA(props.backgroundColor);
  //console.log(removeBeer);

  const nowRemoveBeer = (event) => {
       removeBeer(beerObj);
       handleClose();
  }


  return (
    <>
      <a href="#" onClick={handleShow} title="Edit this Beer">
        {beerName}
      </a>
      <Modal show={show} onHide={handleClose} className="clb-edit-beer"  style={{background: backgroundRGBA}} >
        <Modal.Header closeButton>
          <Modal.Title>Now Editing: {props.beerName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
             <NewBeerForm
                    id={beerObj.id}
                    breweries={breweries}
                    actionButtonText={'Save Changes'}
                    defaultValue={beerObj.description}
                    beerName={beerName}
                    currentABV={currentABV}
                    edit={true}
                    defaultBrewery={
                              {
                                   value: beerObj.brewery_slug,
                                   label: beerObj.brewery_name
                              }
                         }
                    brewerySlug={beerObj.brewery_slug}
                    breweryName={beerObj.brewery_name}
                    defaultRating={beerObj.my_rating}
                    defaultRating={beerObj.my_rating}
                    addNewBeer={addNewBeer}
                    backgroundColor={beerObj.backgroundColor}
                    editCurrentBeer={editCurrentBeer}
               />
        </Modal.Body>
        <Modal.Footer>
          <a href="#" className="clb-modal-subheader remove-beer" onClick={e =>
            window.confirm(
              "Are you sure you want to delete this beer? All of your logs with this beer will also be removed. You cannot undo this action."
         ) && nowRemoveBeer()
          }>Delete Beer</a>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
