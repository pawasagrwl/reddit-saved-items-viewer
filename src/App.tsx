// src/App.tsx

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ContentTabs from './components/ContentTabs';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { SavedItems } from './types'; // Importing the type you have already defined

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [savedItems, setSavedItems] = useState<SavedItems | null>(null);

  useEffect(() => {
    // Fetch the saved items from the public folder
    fetch('/saved_items.json')
      .then((response) => response.json())
      .then((data: SavedItems) => setSavedItems(data))
      .catch((error) => console.error('Error fetching saved items:', error));
  }, []);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      {savedItems && <ContentTabs posts={savedItems.content.posts} comments={savedItems.content.comments} />}
    </ThemeProvider>
  );
};

export default App;
