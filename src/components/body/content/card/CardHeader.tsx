// src/components/common/CardHeader.tsx
import React from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

interface CardHeaderProps {
  title: string;
  subreddit: string;
  datetime: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subreddit,
  datetime,
}) => (
  <div>
    <Typography variant="h5" component="div" sx={{ mb: 2 }}>
      {title}
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
      <a
        href={`https://www.reddit.com/r/${subreddit}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        r/{subreddit}
      </a>{" "}
      {datetime}
    </Typography>
  </div>
);

export default CardHeader;
