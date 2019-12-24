import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { SliderPicker } from 'react-color';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function ColorPickerSwitch(props) {
  const [state, setState] = React.useState({
    checkedB: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  let defaultColor = props.backgroundColor;
  let onChangeComplete = props.onChangeComplete;
  let manualHexSelection = props.manualHexSelection;

  return (
       <div className="color-picker-area">
          <h4>Choose a Color for your Beer Card</h4>
         <FormGroup row>
           <FormControlLabel
             control={
               <Switch
                 checked={state.checkedB}
                 onChange={handleChange('checkedB')}
                 value="checkedB"
                 color="primary"
               />
             }
             label="View Color Picker"
           />
           </FormGroup>

            {( state.checkedB === true ) &&
                 <SliderPicker color={ defaultColor } onChangeComplete={ onChangeComplete } />
            }
            {( state.checkedB !== true ) &&
                 <div id="new-beer-hex-color-input" >
                    <TextField
                         onChange={manualHexSelection}
                         id="standard-basic"
                         label="Color (HEX)"
                         InputProps={{
                           startAdornment: <InputAdornment position="start">#</InputAdornment>,
                         }}
                         inputProps={{
                             maxLength: 6
                           }}
                    />
                 </div>
            }
      </div>
  );
}
