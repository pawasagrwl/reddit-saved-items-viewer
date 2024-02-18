// src/components/CommentCard.tsx

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import TruncatedText from "./TruncatedText";
import Box from "@mui/material/Box";
interface CommentCardProps {
  postTitle: string;
  subreddit: string;
  datetime: string;
  commentText: string;
  votes: number;
  postUrl: string;
  commentUrl: string;
}

const CommentCard: React.FC<CommentCardProps> = ({
  postTitle,
  subreddit,
  datetime,
  commentText,
  votes,
  postUrl,
  commentUrl,
}) => {
  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          r/{subreddit}
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
          {postTitle}
          <Typography
            component="span"
            variant="body2"
            sx={{ marginLeft: "auto", fontSize: "0.8rem" }}
          >
            {new Date(datetime).toLocaleDateString()}{" "}
            {new Date(datetime).toLocaleTimeString()}
          </Typography>
        </Typography>

        <TruncatedText text={commentText} />
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ marginLeft: "10px" }}>{votes} votes</Typography>
        <Box>
          <Button
            variant="contained"
            size="small"
            href={postUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mr: 1 }}
          >
            Post Link
          </Button>
          <Button
            variant="contained"
            size="small"
            href={commentUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mr: 1 }}
          >
            Comment Link
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default CommentCard;
