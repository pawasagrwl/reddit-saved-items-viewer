// src/components/common/CardHeader.tsx
import React from "react";
import Typography from "@mui/material/Typography";

interface CardHeaderProps {
  title: string;
  author: string;
  subreddit: string;
  datetime: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  author,
  subreddit,
  datetime,
}) => (
  <div>
    <Typography variant="h5" component="div" sx={{ mb: 2 }}>
      {title}
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
      <a
        href={`https://www.reddit.com/r/${subreddit}/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        r/{subreddit}
      </a>{" "}
      <a
        href={`https://www.reddit.com/user/${author}/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        u/{author}
      </a>{" "}
      {datetime}
    </Typography>
  </div>
);

export default CardHeader;
