// src/components/common/TruncatedText.tsx
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const TruncatedText: React.FC<{ text: string }> = ({ text }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const MAX_LENGTH = 200; // Maximum length before showing "Read More"

  return (
    <Box>
      <Typography
        variant="body2"
        component="p"
        sx={{ whiteSpace: "pre-line", display: "inline" }}
      >
        {isExpanded
          ? text
          : text.slice(0, MAX_LENGTH) + (text.length > MAX_LENGTH ? "..." : "")}
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
