// src/TruncatedText.tsx
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const TruncatedText: React.FC<{ text: string }> = ({ text }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const displayText = isExpanded
    ? text
    : text.slice(0, 200) + (text.length > 200 ? "..." : "");

  return (
    <>
      <Typography variant="body2" component="p" sx={{ whiteSpace: "pre-line" }}>
        {displayText}
      </Typography>
      {text.length > 200 && (
        <Button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Read less" : "Read more"}
        </Button>
      )}
    </>
  );
};

export default TruncatedText;
