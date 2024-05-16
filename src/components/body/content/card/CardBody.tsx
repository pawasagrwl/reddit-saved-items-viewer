// src/components/common/CardBody.tsx

import React from "react";
import Typography from "@mui/material/Typography";
import ReactMarkdown from "react-markdown";
import PostMedia from "../PostMedia";

interface CardBodyProps {
  text: string;
  media: string;
  onClick?: () => void;
}

const CardBody: React.FC<CardBodyProps> = ({ text, media, onClick }) => {
  return (
    <>
      {media && <PostMedia media={media} title={"media"} />}

      <Typography
        variant="body2"
        component="div"
        onClick={onClick}
        sx={{ cursor: "pointer" }}
      >
        <ReactMarkdown>
          {text.length > 200
            ? `${text.slice(0, 200)}...(click to read more)`
            : text}
        </ReactMarkdown>
      </Typography>
    </>
  );
};

export default CardBody;
