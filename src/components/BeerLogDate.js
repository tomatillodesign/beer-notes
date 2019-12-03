import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function BeerLogDate() {

// The first commit of Material-UI
const [selectedDate, setSelectedDate] = React.useState(new Date());

const handleDateChange = date => {
  setSelectedDate(date);
};

return (
     <MuiPickersUtilsProvider utils={DateFnsUtils}>
         <KeyboardDatePicker
           margin="normal"
           id="date-picker-dialog"
           label="Date"
           format="MM/dd/yyyy"
           value={selectedDate}
           onChange={handleDateChange}
           KeyboardButtonProps={{
            'aria-label': 'change date',
           }}
         />
     </MuiPickersUtilsProvider>
);

}
