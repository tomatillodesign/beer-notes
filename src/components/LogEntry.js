import React from 'react';

class LogEntry extends React.Component {

     render() {

          // use ES6 to destructure an object into single variables
          const { timestamp, entryDate, beer, brewery, notes } = this.props.details;
          let entryDatePublish = JSON.stringify(entryDate);

          return (
               <li className="single-entry">
                    <h3 className="beer-name">{beer} ({brewery})</h3>
                    <p>Date: {entryDatePublish}</p>
                    <p>{notes}</p>
               </li>
               );
     }

}

export default LogEntry;
