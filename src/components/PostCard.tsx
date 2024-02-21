// src/components/PostCard.tsx

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import TruncatedText from "./TruncatedText";
import Box from "@mui/material/Box";
interface PostCardProps {
  title: string;
  subreddit: string;
  datetime: string;
  body: string;
  media: string;
  votes: number;
  url: string;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  subreddit,
  datetime,
  body,
  media,
  votes,
  url,
}) => {
  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          r/{subreddit}
          {new Date(datetime).toLocaleDateString()}{" "}
          {new Date(datetime).toLocaleTimeString()}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {title}
        </Typography>
        <TruncatedText text={body} />
        {/* Display media if exists */}
        {media && (
          <img
            src={media}
            alt={""}
            style={{ maxWidth: "100%", marginTop: "10px" }}
          />
        )}
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ marginLeft: "10px" }}>{votes} votes</Typography>
        <Box>
          <Button
            variant="contained"
            size="small"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mr: 1 }}
          >
            Open Post
          </Button>{" "}
        </Box>
      </CardActions>
    </Card>
  );
};

export default PostCard;
