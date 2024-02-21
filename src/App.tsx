// src/App.tsx

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ContentTabs from "./components/ContentTabs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { SavedItems, Post, Comment } from "./types"; // Importing the type you have already defined

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [savedItems, setSavedItems] = useState<SavedItems | null>(null);
  const [currentSort, setCurrentSort] = useState<string>("");

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

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        darkMode={darkMode}
        handleThemeChange={handleThemeChange}
        handleSortChange={handleSortChange}
        currentSort={currentSort}
      />
      {savedItems && (
        <ContentTabs
          posts={savedItems.content.posts}
          comments={savedItems.content.comments}
        />
      )}
    </ThemeProvider>
  );
};

export default App;
