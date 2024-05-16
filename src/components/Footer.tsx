import React from "react";
import { useTheme } from "../common/context/ThemeContext";
import { useSavedItems } from "../common/hooks/useSavedItems";
import { FaGithub, FaCopyright } from "react-icons/fa"; // Import icons

const Footer = () => {
  const { darkMode } = useTheme();
  const { savedItems } = useSavedItems("saved");

  const footerStyle: React.CSSProperties = {
    backgroundColor: darkMode ? "#1A202C" : "#F7FAFC",
    color: darkMode ? "white" : "black",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed" as const,
    bottom: 0,
    width: "100%",
    boxShadow: "0 -2px 10px 0 rgba(0, 0, 0, 0.2)",
    zIndex: 50,
  };

  const linkStyle: React.CSSProperties = {
    color: darkMode ? "#63B3ED" : "#4299E1",
    display: 'inline-flex',
    alignItems: 'center',
  };

  const textStyle: React.CSSProperties = {
    margin: 0,
  };

  const iconStyle: React.CSSProperties = {
    marginRight: "5px",
  };

  const hoverTextStyle: React.CSSProperties = {
    visibility: "hidden",
    whiteSpace: "nowrap",
    marginLeft: "5px",
    fontSize: "12px",
    position: "absolute",
    backgroundColor: darkMode ? "#1A202C" : "#F7FAFC",
    padding: "5px",
    borderRadius: "3px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
    zIndex: 100,
  };

  return (
    <footer style={footerStyle}>
      <style>
        {`
          @media (max-width: 600px) {
            footer {
              padding: 5px 10px;
            }
            .footer-item {
              font-size: 12px;
              display: inline-flex;
              align-items: center;
              position: relative;
            }
            .footer-item:hover .hover-text {
              visibility: visible;
            }
          }
        `}
      </style>
      <div className="footer-item">
        <a
          href="https://github.com/pawasagrwl/reddit-saved-items-viewer"
          style={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub style={iconStyle} />
          <span className="hover-text" style={hoverTextStyle}>View source on Github</span>
        </a>
      </div>
      <div className="footer-item">
        <p style={textStyle}>
          {savedItems ? `Last fetched: ${savedItems.last_fetched_on}` : "Error"}
          <span className="hover-text" style={hoverTextStyle}>
            {savedItems ? `Saved Items Last fetched: ${savedItems.last_fetched_on}` : "Error"}
          </span>
        </p>
      </div>
      <div className="footer-item">
        <FaCopyright style={iconStyle} />
        <span className="hover-text" style={hoverTextStyle}>© 2024 Pawas Aggarwal</span>
      </div>
    </footer>
  );
};

export default Footer;
