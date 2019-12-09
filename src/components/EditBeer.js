import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NewBeerForm from './NewBeerForm';

export default function EditBeer(props) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const beerLog = props.beerLog;
  const breweries = props.breweries;
  const beerObj = props.beerObj;
  const beerName = props.beerName;
  const currentABV = beerObj.abv;

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleShow} title="View Log">
        Edit Beer
      </Button>

      <Modal show={show} onHide={handleClose} className="clb-single-beer-notes">
        <Modal.Header closeButton>
          <Modal.Title>Now Editing: {props.beerName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
             <NewBeerForm
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
                    defaultRating={beerObj.my_rating}
               />
        </Modal.Body>
        <Modal.Footer>
          <div className="clb-modal-subheader"></div>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
