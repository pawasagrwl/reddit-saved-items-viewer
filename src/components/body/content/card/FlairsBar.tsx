// src/components/common/FlairsBar.tsx
import React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

interface FlairsBarProps {
  flairs: string[];
  archived: boolean;
}

const FlairsBar: React.FC<FlairsBarProps> = ({ flairs, archived }) => (
  <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
    {flairs.map((flair, index) => (
      <Chip key={index} label={flair} size="small" sx={{ marginRight: 1 }} />
    ))}
    {archived && <Chip label="Archived" size="small" color="default" />}
  </Box>
);

export default FlairsBar;
 