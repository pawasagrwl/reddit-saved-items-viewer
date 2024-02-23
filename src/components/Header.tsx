import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import SearchBar from './SearchBar'; // Import SearchBar
import ThemeToggler from './ThemeToggler'; // Import ThemeToggler
import { HeaderProps } from "../types/componentTypes";
import SortSelector from './SortSelector';

const Header: React.FC<HeaderProps> = ({
  darkMode,
  handleThemeChange,
  handleSortChange,
  currentSort,
  searchTerm,
  handleSearchChange,
}) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Reddit Saved Items Viewer
        </Typography>
        <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
        <SortSelector currentSort={currentSort} handleSortChange={handleSortChange} />
        <ThemeToggler darkMode={darkMode} toggleTheme={handleThemeChange} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
