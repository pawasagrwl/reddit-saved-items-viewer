import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { SearchBarProps } from "../../common/types/componentTypes";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[200],
  "&:hover": {
    backgroundColor: theme.palette.grey[300],
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

// Add a new style for the checkbox
const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  // Add styles to position the checkbox inside the search bar
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translateY(-50%)",
  marginRight: theme.spacing(1),
}));

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  handleSearchChange,
  preserveSearch,
  togglePreserveSearch,
}) => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Type here to search..."
        inputProps={{ "aria-label": "search" }}
        value={searchTerm}
        onChange={(e) => handleSearchChange(e.target.value)}
      />
      <StyledFormControlLabel
        control={
          <Checkbox
            checked={preserveSearch}
            onChange={(e) => togglePreserveSearch(e.target.checked)}
            color="primary"
          />
        }
        label="Preserve Search"
      />
    </Search>
  );
};

export default SearchBar;
