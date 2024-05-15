// src/components/comments/CommentCard.tsx

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CommentCardProps } from "../../../common/types/contentTypes";
import CardHeader from "./card/CardHeader";
import CardBody from "./card/CardBody";
import CardFooter from "./card/CardFooter";

const CommentCard: React.FC<CommentCardProps> = ({
  postTitle,
  subreddit,
  datetime,
  commentText,
  author,
  votes,
  postUrl,
  commentUrl,
}) => {
  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <CardHeader title={postTitle} author = {author} subreddit={subreddit} datetime={datetime} />
        <CardBody text={commentText} />
        <CardFooter votes={votes} url={postUrl} commentUrl={commentUrl} />
      </CardContent>
    </Card>
  );
};

export default CommentCard;
