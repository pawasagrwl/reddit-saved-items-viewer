// src/components/common/FlairsBar.tsx
import React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

interface FlairsBarProps {
  flairs: string[];
  nsfw: boolean;
  archived: boolean;
}

const FlairsBar: React.FC<FlairsBarProps> = ({ flairs, nsfw, archived }) => (
  <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
    {flairs.map((flair, index) => (
      flair && <Chip key={index} label={flair} size="small" sx={{ marginRight: 1 }} />
    ))}
    {nsfw && <Chip label="NSFW" size="small" sx={{ marginRight: 1 }} color="default"  />}
    {archived && <Chip label="Archived" size="small" color="default" />}
  </Box>
);

export default FlairsBar;
