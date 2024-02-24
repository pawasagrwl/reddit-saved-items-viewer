import React from "react";
import {
  FormControl,
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
      <Select
        value={currentSort}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Sort by" }}
      >
        <MenuItem value="newest">Newest</MenuItem>
        <MenuItem value="oldest">Oldest</MenuItem>
        <MenuItem value="highest_votes">Highest Votes</MenuItem>
        <MenuItem value="lowest_votes">Lowest Votes</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortSelector;
