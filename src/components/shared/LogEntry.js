import React from 'react';

class LogEntry extends React.Component {

     constructor(props) {
          super(props);

          const removeLogEntry = props.removeLogEntry;
          console.log(removeLogEntry);

     }




     nowRemoveLog = (event) => {
          const logKey = event.currentTarget.dataset.logKey;
          console.log(logKey);
          this.props.removeLogEntry(logKey);
     }

     render() {

          const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

          // use ES6 to destructure an object into single variables
          const { timestamp, entryDate, beer, brewery_name, notes, key } = this.props.details;
          let newDate = new Date(entryDate);
          const entryDatePublish = newDate.toLocaleDateString('en-US', dateOptions);
          const modal = this.props.modal;

          let breweryNameToPublish = null;
          if( brewery_name ) {
               breweryNameToPublish = '(' + brewery_name + ')';
          }

          if(modal) {

          return (
                    <li className="modal-single-entry">
                         <div className="modal-log-date">🍺 {entryDatePublish}<span className="remove-log-entry"><button id={"remove-log-entry-" + key} data-log-key={key} onClick={this.nowRemoveLog} title="Permanently delete this entry">x</button></span></div>
                         { notes &&
                            <div className="modal-log-notes">{notes}</div>
                         }
                    </li>
                    );
               } else {
                    return (
                         <li className="single-entry">
                              <h3 className="beer-name">🍺 {beer} {breweryNameToPublish} &middot; {entryDatePublish}<span className="remove-log-entry"><button id={"remove-log-entry-" + key} data-log-key={key} onClick={this.nowRemoveLog} title="Permanently delete this entry">x</button></span></h3>
                              { notes &&
                                 <p>{notes}</p>
                              }
                         </li>
                         );
               }
     }

}

export default LogEntry;
