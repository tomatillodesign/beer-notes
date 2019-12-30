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
  const removeLogEntry = props.removeLogEntry;
  const logEntriesByDate = [...beerLog].sort((a, b) => (a.entryDate < b.entryDate) ? 1 : -1);

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleShow} title="View Log" style={{backgroundColor: props.backgroundColor}}>
        {props.logCount}
      </Button>

      <Modal show={show} onHide={handleClose} className="clb-single-beer-notes">
        <Modal.Header closeButton>
          <Modal.Title>{props.beerName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
               {props.description &&
                           <div className="clb-beer-description">
                              <h3>My Notes</h3>
                             {props.description}
                         </div>
               }
             <ul className="log-entry-area">
                  {Object.keys(logEntriesByDate).map(key => <LogEntry key={key} details={logEntriesByDate[key]} modal={true} removeLogEntry={removeLogEntry} />)}
             </ul>
        </Modal.Body>
        <Modal.Footer>
          <div className="clb-modal-subheader"><Typography variant="overline" display="block" gutterBottom><span className="brewery-credit">By {props.breweryName}</span></Typography></div>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
