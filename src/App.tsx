import React, { useState } from "react";
import Header from "./components/Header";
import ContentTabs from "./components/ContentTabs";
import DropdownBar from "./components/DropdownBar";
import { createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSavedItems } from './hooks/useSavedItems';
import { sortData, filterPosts, filterComments, getDropdownOptions } from './utils/sortingFiltering';
import { useTheme } from './context/ThemeContext';

const App: React.FC = () => {
  const [currentSort, setCurrentSort] = useState<string>("");
  const [subredditFilter, setSubredditFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [monthFilter, setMonthFilter] = useState("");
  const [votesFilter, setVotesFilter] = useState("");
  const { darkMode, toggleTheme } = useTheme();
  const { savedItems } = useSavedItems(currentSort);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const filteredPosts = savedItems ? filterPosts(savedItems.content.posts, subredditFilter, yearFilter, monthFilter, votesFilter) : [];
  const filteredComments = savedItems ? filterComments(savedItems.content.comments, subredditFilter, yearFilter, monthFilter, votesFilter) : [];
  const subredditOptions = savedItems ? getDropdownOptions(savedItems, "subreddit") : [];
  const yearOptions = savedItems ? getDropdownOptions(savedItems, "year") : [];
  const monthOptions = savedItems ? getDropdownOptions(savedItems, "month") : [];
  const votesOptions = savedItems ? getDropdownOptions(savedItems, "votes") : [];

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        darkMode={darkMode}
        handleThemeChange={toggleTheme}
        handleSortChange={setCurrentSort}
        currentSort={currentSort}
      />
      <div style={{ padding: "20px", display: "flex", justifyContent: "center", gap: "20px" }}>
        <DropdownBar
          subredditFilter={subredditFilter}
          setSubredditFilter={setSubredditFilter}
          yearFilter={yearFilter}
          setYearFilter={setYearFilter}
          monthFilter={monthFilter}
          setMonthFilter={setMonthFilter}
          votesFilter={votesFilter}
          setVotesFilter={setVotesFilter}
          subredditOptions={subredditOptions}
          yearOptions={yearOptions}
          monthOptions={monthOptions}
          votesOptions={votesOptions}
        />
      </div>
      <ContentTabs
        posts={filteredPosts}
        comments={filteredComments}
      />
    </MUIThemeProvider>
  );
};

export default App;
