// src/components/common/Dropdown.tsx
import React from 'react';
import { FormControl, TextField, FormHelperText } from '@mui/material';
import { DropdownProps } from '../../common/types/dropdownTypes'; // Adjust the import path as necessary
import Autocomplete from '@mui/material/Autocomplete';

const Dropdown: React.FC<DropdownProps> = ({
  label,
  value,
  onChange,
  options,
}) => {
  const handleAutocompleteChange = (event: any, newValue: any) => {
    onChange(newValue ? newValue.value : '');
  };

  return (
    <FormControl variant="outlined" size="small" style={{ minWidth: 120, margin: '8px' }}>
      <Autocomplete
        value={options.find(option => option.value === value) || null} // Find the option object that matches the current value or null if not found
        onChange={handleAutocompleteChange}
        options={options}
        getOptionLabel={(option) => option.label} // Assuming your options are objects with `label` and `value` properties
        renderInput={(params) => <TextField {...params} label={label} variant="outlined" />}
        size="small"
      />
    </FormControl>
  );
};

export default Dropdown;
