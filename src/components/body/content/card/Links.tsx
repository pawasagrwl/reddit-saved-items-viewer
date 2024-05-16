// src/components/common/Links.tsx
import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LinkIcon from "@mui/icons-material/Link";
import CommentIcon from "@mui/icons-material/Comment";

interface LinksProps {
  url: string;
  commentUrl?: string;
}

const Links: React.FC<LinksProps> = ({ url, commentUrl }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      mt: 1,
    }}
  >
    {commentUrl ? (
      <Button
        variant="outlined"
        size="small"
        startIcon={<CommentIcon />}
        href={commentUrl}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          textTransform: "none",
          color: "primary.main",
          borderColor: "primary.main",
        }}
      >
        Open Comment
      </Button>
    ) : (
      <Button
        variant="outlined"
        size="small"
        startIcon={<LinkIcon />}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          textTransform: "none",
          color: "primary.main",
          borderColor: "primary.main",
          mb: 1,
        }}
      >
        Open Post
      </Button>
    )}
  </Box>
);

export default Links;
