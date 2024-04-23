import React from "react";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // dark mode icon
import Brightness7Icon from "@mui/icons-material/Brightness7"; // light mode icon
import { ThemeTogglerProps } from "../../common/types/headerTypes";

const ThemeToggler: React.FC<ThemeTogglerProps> = ({
  darkMode,
  toggleTheme,
}) => {
  return (
    <IconButton color="inherit" onClick={toggleTheme}>
      {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ThemeToggler;
