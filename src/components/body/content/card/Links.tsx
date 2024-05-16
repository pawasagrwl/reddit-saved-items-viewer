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
      sx={{ textTransform: 'none' }}
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
        sx={{ textTransform: 'none', ml: 1 }}
      >
        Open Comment
      </Button>
    )}
  </Box>
);

export default Links;
