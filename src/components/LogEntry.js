import React from 'react';

class LogEntry extends React.Component {

     render() {

          //console.log(this.props);

          const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
          //console.log(event.toLocaleDateString('us-US', options));

          // use ES6 to destructure an object into single variables
          const { timestamp, entryDate, beer, brewery, notes } = this.props.details;
          //const entryDatePublish = JSON.stringify(entryDate);
          let newDate = new Date(entryDate);
          //console.log(newDate);
          const entryDatePublish = newDate.toLocaleDateString('en-US', dateOptions);
          //const entryDatePublish = entryDate.toISOString();
          const modal = this.props.modal;
          //console.log(modal);

          if(modal) {

          return (
                    <li className="modal-single-entry">
                         <div className="modal-log-date">{entryDatePublish}</div>
                         <div className="modal-log-notes">Notes: {notes}</div>
                    </li>
                    );
               } else {
                    return (
                         <li className="single-entry">
                              <h3 className="beer-name">{beer} ({brewery})</h3>
                              <p>Notes: {notes}</p>
                              <p>{entryDatePublish}</p>
                         </li>
                         );
               }
     }

}

export default LogEntry;
