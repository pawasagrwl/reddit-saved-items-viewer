// src/components/CommentCard.tsx
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CommentCardProps } from "../../types/componentTypes";
import CardHeader from "../common/CardHeader";
import CardBody from "../common/CardBody";
import CardFooter from "../common/CardFooter";
import CardTitle from "../common/CardTitle";

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
        <CardHeader subreddit={subreddit} datetime={datetime} />
        <CardTitle title={postTitle}/>
        <CardBody text={commentText} />
        <CardFooter votes={votes} url={postUrl} commentUrl={commentUrl} />
      </CardContent>
      </Card>
  );
};

export default CommentCard;
