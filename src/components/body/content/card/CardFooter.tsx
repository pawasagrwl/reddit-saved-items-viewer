// src/components/CardFooter.tsx

import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Links from "./Links";

interface CardFooterProps {
  votes: number;
  url: string;
  commentUrl?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({ votes, url, commentUrl }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mt: 2,
    }}
  >
    <Typography>{votes} votes</Typography>
    <Links url={url} commentUrl={commentUrl} />
  </Box>
);

export default CardFooter;
