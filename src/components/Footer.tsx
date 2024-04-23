// Footer.tsx
import React from 'react';
import { useTheme } from "../common/context/ThemeContext"; // Assuming this path is correct

const Footer = () => {
  const { darkMode } = useTheme(); // use the darkMode value from ThemeContext

  const footerStyle: React.CSSProperties = {
    backgroundColor: darkMode ? "#1A202C" : "#F7FAFC",
    color: darkMode ? "white" : "black",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed" as const, // TypeScript recognizes this as a valid Position type
    bottom: 0,
    width: "100%",
    boxShadow: "0 -2px 10px 0 rgba(0, 0, 0, 0.2)",
    zIndex: 50
  };

  return (
    <footer style={footerStyle}>
      <div>
        <a href="https://github.com/pawasagrwl/reddit-saved-items-viewer" 
           style={{ color: darkMode ? "#63B3ED" : "#4299E1" }}
           target="_blank" rel="noopener noreferrer">View source on Github</a>
      </div>
      <div>
        <p style={{ margin: 0 }}>© 2024 Pawas Aggarwal</p>
      </div>
    </footer>
  );
};

export default Footer;
