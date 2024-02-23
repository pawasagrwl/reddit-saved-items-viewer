// src/components/common/Links.tsx
import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

interface LinksProps {
  url: string;
  commentUrl?: string;
}

const Links: React.FC<LinksProps> = ({ url, commentUrl }) => (
  <Box>
    <Button
      variant="contained"
      size="small"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ mr: 1 }}
    >
      Open Post
    </Button>
    {commentUrl && (
      <Button
        variant="contained"
        size="small"
        href={commentUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Comment
      </Button>
    )}
  </Box>
);

export default Links;
