// src/components/common/CardHeader.tsx
import React from "react";
import Typography from "@mui/material/Typography";

interface CardHeaderProps {
  subreddit: string;
  datetime: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ subreddit, datetime }) => (
  <Typography sx={{ mb: 1.5 }} color="text.secondary">
    r/{subreddit} {new Date(datetime).toLocaleDateString()}{" "}
    {new Date(datetime).toLocaleTimeString()}
  </Typography>
);

export default CardHeader;
