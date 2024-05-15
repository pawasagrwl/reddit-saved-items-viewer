import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { SortSelectorProps } from "../../common/types/headerTypes";

const SortSelector: React.FC<SortSelectorProps> = ({
  currentSort,
  handleSortChange,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    handleSortChange(event.target.value as string);
  };

  return (
    <FormControl variant="outlined" size="small" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="sort-by-label">Sort by</InputLabel>
      <Select
        labelId="sort-by-label"
        id="sort-by-select"
        value={currentSort}
        onChange={handleChange}
        label="Sort by"
        
        inputProps={{
          "aria-label": "Sort by",
        }}
      >
        <MenuItem value="saved">Saved</MenuItem>
        <MenuItem value="reverse">Reverse</MenuItem>
        <MenuItem value="newest">Newest</MenuItem>
        <MenuItem value="oldest">Oldest</MenuItem>
        <MenuItem value="highest_votes">Highest Votes</MenuItem>
        <MenuItem value="lowest_votes">Lowest Votes</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortSelector;
