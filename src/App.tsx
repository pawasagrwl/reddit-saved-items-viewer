// src/App.tsx

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ContentTabs from "./components/ContentTabs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { SavedItems, Post, Comment } from "./types/savedItemsTypes";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { DropdownProps } from "./types/componentTypes";
import { SelectChangeEvent } from "@mui/material/Select";
import DropdownBar from "./components/DropdownBar";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [savedItems, setSavedItems] = useState<SavedItems | null>(null);
  const [currentSort, setCurrentSort] = useState<string>("");
  const [subredditFilter, setSubredditFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [monthFilter, setMonthFilter] = useState("");
  const [votesFilter, setVotesFilter] = useState("");

  const handleSortChange = (sortValue: string) => {
    setCurrentSort(sortValue);
  };
  const sortData = (data: SavedItems): SavedItems => {
    let sortedPosts = [...data.content.posts];
    let sortedComments = [...data.content.comments];

    switch (currentSort) {
      case "newest":
        sortedPosts.sort(
          (a, b) =>
            new Date(b.datetime).getTime() - new Date(a.datetime).getTime()
        );
        sortedComments.sort(
          (a, b) =>
            new Date(b.datetime).getTime() - new Date(a.datetime).getTime()
        );
        break;
      case "oldest":
        sortedPosts.sort(
          (a, b) =>
            new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
        );
        sortedComments.sort(
          (a, b) =>
            new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
        );
        break;
      case "lowest_votes":
        sortedPosts.sort((a, b) => a.votes - b.votes);
        sortedComments.sort((a, b) => a.votes - b.votes);
        break;
      case "highest_votes":
        sortedPosts.sort((a, b) => b.votes - a.votes);
        sortedComments.sort((a, b) => b.votes - a.votes);
        break;
    }

    return {
      ...data,
      content: {
        ...data.content,
        posts: sortedPosts,
        comments: sortedComments,
      },
    };
  };

  useEffect(() => {
    fetch("/saved_items.json")
      .then((response) => response.json())
      .then((data: SavedItems) => {
        setSavedItems(sortData(data));
      })
      .catch((error) => console.error("Error fetching saved items:", error));
  }, [currentSort]);
  const getDropdownOptions = (
    data: SavedItems,
    filterType: string
  ): { label: string; value: string }[] => {
    switch (filterType) {
      case "subreddit":
        return Object.entries(data.counts.subreddits).map(([key, value]) => ({
          label: `${key} (${value.posts})`,
          value: key,
        }));
      case "year":
        return [
          ...new Set(
            Object.keys(data.counts.dates).map((date) => date.split("-")[0])
          ),
        ].map((year) => ({
          label: year,
          value: year,
        }));
      case "month":
        // Ensure year is selected first
        if (!yearFilter) return [];
        return [
          ...new Set(
            Object.keys(data.counts.dates)
              .filter((date) => date.startsWith(yearFilter))
              .map((date) => date.split("-")[1])
          ),
        ].map((month) => ({
          label: month,
          value: month,
        }));
      case "votes":
        return Object.keys(data.counts.votes).map((range) => ({
          label: `${range} (${data.counts.votes[range].posts})`,
          value: range,
        }));
      default:
        return [];
    }
  };

  const subredditOptions = savedItems
    ? getDropdownOptions(savedItems, "subreddit").sort((a, b) =>
        a.label.localeCompare(b.label)
      )
    : [];

  const yearOptions = savedItems ? getDropdownOptions(savedItems, "year") : [];
  const monthOptions = savedItems
    ? getDropdownOptions(savedItems, "month")
    : [];
  const votesOptions = savedItems
    ? getDropdownOptions(savedItems, "votes")
    : [];

  const filterPosts = (posts: Post[]) => {
    return posts.filter((post) => {
      const postDate = new Date(post.datetime);
      const postYear = postDate.getFullYear().toString();
      const postMonth = (postDate.getMonth() + 1).toString().padStart(2, "0");
      const postVotes = post.votes;
      const votesRange = votesFilter.split("-");

      return (
        (subredditFilter ? post.subreddit === subredditFilter : true) &&
        (yearFilter ? postYear === yearFilter : true) &&
        (monthFilter ? postMonth === monthFilter : true) &&
        (votesFilter
          ? postVotes >= parseInt(votesRange[0]) &&
            postVotes <= parseInt(votesRange[1])
          : true)
      );
    });
  };
  const filterComments = (comments: Comment[]) => {
    return comments.filter((comment) => {
      const commentDate = new Date(comment.datetime);
      const commentYear = commentDate.getFullYear().toString();
      const commentMonth = (commentDate.getMonth() + 1)
        .toString()
        .padStart(2, "0");
      const commentVotes = comment.votes;
      const votesRange = votesFilter.split("-");

      return (
        (subredditFilter ? comment.post_subreddit === subredditFilter : true) &&
        (yearFilter ? commentYear === yearFilter : true) &&
        (monthFilter ? commentMonth === monthFilter : true) &&
        (votesFilter
          ? commentVotes >= parseInt(votesRange[0]) &&
            commentVotes <= parseInt(votesRange[1])
          : true)
      );
    });
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header
          darkMode={darkMode}
          handleThemeChange={handleThemeChange}
          handleSortChange={handleSortChange}
          currentSort={currentSort}
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
            yearFilter={yearFilter}
            monthFilter={monthFilter}
            votesFilter={votesFilter}
            setSubredditFilter={setSubredditFilter}
            setYearFilter={setYearFilter}
            setMonthFilter={setMonthFilter}
            setVotesFilter={setVotesFilter}
            subredditOptions={subredditOptions}
            yearOptions={yearOptions}
            monthOptions={monthOptions}
            votesOptions={votesOptions}
          />
        </div>
        {savedItems && (
          <ContentTabs
            posts={filterPosts(savedItems.content.posts)}
            comments={filterComments(savedItems.content.comments)} // Adjust this based on actual data structure and filtering logic
          />
        )}
      </ThemeProvider>
    </>
  );
};

export default App;
