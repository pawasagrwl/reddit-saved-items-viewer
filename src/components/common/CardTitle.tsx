// src/components/common/CardTitle.tsx
import React from "react";
import Typography from "@mui/material/Typography";

interface CardTitleProps {
  title: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ title }) => (
  <Typography variant="h5" component="div" sx={{ mb: 2 }}>
    {title}
  </Typography>
);

export default CardTitle;
