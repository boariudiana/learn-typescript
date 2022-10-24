import CheckboxesGroupProps from '../types/interfaces/CheckBoxesGroupProps';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



export default function CheckboxesGroup (props: CheckboxesGroupProps) {


  const { hr, coach, developer } = props.roles;

  return (
    <Box>
      <FormControl
        required
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      >
        <FormLabel component="legend">Pick at least one role</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={coach} onChange={(e) => props.onChangeRole(e)} name="coach" />
            }
            label="Coach"
          />
          <FormControlLabel
            control={
              <Checkbox checked={hr} onChange={(e) => props.onChangeRole(e)} name="hr" />
            }
            label="HR"
          />
          <FormControlLabel
            control={
              <Checkbox checked={developer} onChange={(e) => props.onChangeRole(e)} name="developer" />
            }
            label="Developer"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
}
