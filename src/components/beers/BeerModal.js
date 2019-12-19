import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LogEntry from '../shared/LogEntry';

export default function BeerModal(props) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const beerLog = props.beerLog;

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleShow} title="View Log">
        {props.logCount}
      </Button>

      <Modal show={show} onHide={handleClose} className="clb-single-beer-notes">
        <Modal.Header closeButton>
          <Modal.Title>{props.beerName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
             <ul className="log-entry-area">
                  {Object.keys(beerLog).map(key => <LogEntry key={key} details={beerLog[key]} modal={true} />)}
             </ul>
        </Modal.Body>
        <Modal.Footer>
          <div className="clb-modal-subheader"><Typography variant="overline" display="block" gutterBottom>By {props.breweryName}</Typography></div>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
