import React, { useState } from "react";
import Header from "./components/Header";
import ContentTabs from "./components/ContentTabs";
import DropdownBar from "./components/DropdownBar";
import { ThemeProvider } from "./common/context/ThemeContext";
import CssBaseline from "@mui/material/CssBaseline";
import { useSavedItems } from "./common/hooks/useSavedItems";

import { useTheme } from "./common/context/ThemeContext";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import {
  filterPosts,
  filterComments,
  getDropdownOptions,
} from "./common/utils/sortingFiltering";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [currentSort, setCurrentSort] = useState<string>("");
  const [subredditFilter, setSubredditFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [monthFilter, setMonthFilter] = useState("");
  const [votesFilter, setVotesFilter] = useState("");
  const { darkMode, toggleTheme } = useTheme();
  const { savedItems } = useSavedItems(currentSort);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [preserveSearch, setPreserveSearch] = useState<boolean>(false);
  const togglePreserveSearch = (checked: boolean) => {
    setPreserveSearch(checked);
  };
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  let filteredPosts = savedItems
    ? filterPosts(
        savedItems.content.posts,
        subredditFilter,
        yearFilter,
        monthFilter,
        votesFilter
      )
    : [];
  let filteredComments = savedItems
    ? filterComments(
        savedItems.content.comments,
        subredditFilter,
        yearFilter,
        monthFilter,
        votesFilter
      )
    : [];

  const subredditOptions = savedItems
    ? getDropdownOptions(savedItems, "subreddit")
    : [];
  const yearOptions = savedItems ? getDropdownOptions(savedItems, "year") : [];
  const monthOptions = savedItems
    ? getDropdownOptions(savedItems, "month")
    : [];
  const votesOptions = savedItems
    ? getDropdownOptions(savedItems, "votes")
    : [];

  return (
    <ThemeProvider>
      {" "}
      {/* Wrap the rest of your app in the ThemeProvider */}
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <Header
          darkMode={darkMode}
          handleThemeChange={toggleTheme}
          handleSortChange={setCurrentSort}
          currentSort={currentSort}
          searchTerm={searchTerm}
          handleSearchChange={setSearchTerm}
          preserveSearch={preserveSearch}
          togglePreserveSearch={togglePreserveSearch}
        />
        <div
          style={{
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
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
        <ContentTabs posts={filteredPosts} comments={filteredComments} />
        <Footer />
      </MUIThemeProvider>
    </ThemeProvider>
  );
};

export default App;
