// src/components/common/Dropdown.tsx
import React from 'react';
import { FormControl, TextField, FormHelperText } from '@mui/material';
import { DropdownProps } from '../../common/types/dropdownTypes';
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
        value={options.find(option => option.value === value) || null}
        onChange={handleAutocompleteChange}
        options={options}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => <TextField {...params} label={label} variant="outlined" />}
        size="small"
      />
    </FormControl>
  );
};

export default Dropdown;
