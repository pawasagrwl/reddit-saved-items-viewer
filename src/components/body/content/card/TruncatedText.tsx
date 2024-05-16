// src/components/common/TruncatedText.tsx
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ReactMarkdown from "react-markdown";

const TruncatedText: React.FC<{ text: string }> = ({ text }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const MAX_LENGTH = 200; // Maximum length before showing "Read More"

  return (
    <Box>
      <Typography
        variant="body2"
        component="div" // Change from "p" to "div" for block-level elements
        sx={{ whiteSpace: "pre-line", display: "inline" }}
      >
        <ReactMarkdown>
          {isExpanded
            ? text
            : text.slice(0, MAX_LENGTH) +
              (text.length > MAX_LENGTH ? "..." : "")}
        </ReactMarkdown>
      </Typography>
      {text.length > MAX_LENGTH && (
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          sx={{
            minWidth: "auto",
            padding: 0,
            marginLeft: "5px",
            marginBottom: "3px",
            verticalAlign: "bottom",
          }}
        >
          {isExpanded ? "Read less" : "Read more"}
        </Button>
      )}
    </Box>
  );
};

export default TruncatedText;
