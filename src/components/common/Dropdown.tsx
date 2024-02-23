// src/components/common/Dropdown.tsx
import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { DropdownProps } from "../../types/componentTypes"; // Adjust the import path as necessary

const Dropdown: React.FC<DropdownProps> = ({
  label,
  value,
  onChange,
  options,
}) => (
  <FormControl fullWidth margin="normal">
    <InputLabel>{label}</InputLabel>
    <Select
      value={value}
      onChange={(e: SelectChangeEvent) => onChange(e.target.value as string)}
      label={label}
    >
      <MenuItem value="">
        <em>All</em>
      </MenuItem>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default Dropdown;
