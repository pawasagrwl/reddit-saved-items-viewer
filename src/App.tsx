import React, { useCallback, useState } from "react";
import Header from "./components/Header";
import { ThemeProvider } from "./common/context/ThemeContext";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "./common/context/ThemeContext";
import debounce from "lodash/debounce";
import Footer from "./components/Footer";
import Body from "./components/Body";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

const App: React.FC = () => {
  const [currentSort, setCurrentSort] = useState<string>("");
  const [subredditFilter, setSubredditFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [nsfwFilter, setNsfwFilter] = useState("");
  const [votesFilter, setVotesFilter] = useState("");
  const { darkMode, toggleTheme } = useTheme();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const handleSearchChange = useCallback(
    debounce((value: string) => {
      setDebouncedSearchTerm(value);
    }, 300),
    []
  );
  
  const onSearchInputChange = (value: string) => {
    setSearchTerm(value);
    handleSearchChange(value);
  };

  return (
    <ThemeProvider>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <Header
          darkMode={darkMode}
          handleThemeChange={toggleTheme}
          handleSortChange={setCurrentSort}
          currentSort={currentSort}
          searchTerm={searchTerm}
          handleSearchChange={onSearchInputChange}
        />
        <Body
          subredditFilter={subredditFilter}
          setSubredditFilter={setSubredditFilter}
          yearFilter={yearFilter}
          setYearFilter={setYearFilter}
          nsfwFilter={nsfwFilter}
          setNsfwFilter={setNsfwFilter}
          votesFilter={votesFilter}
          setVotesFilter={setVotesFilter}
          currentSort={currentSort}
          searchTerm={debouncedSearchTerm}
        />
        <Footer />
      </MUIThemeProvider>
    </ThemeProvider>
  );
};

export default App;
