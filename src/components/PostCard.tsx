// src/components/PostCard.tsx
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { PostCardProps } from "../types/componentTypes";
import CardHeader from "./CardHeader";
import CardTitle from "./CardTitle";
import CardBody from "./CardBody";
import PostMedia from "./PostMedia";
import CardFooter from "./CardFooter";

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
        <CardHeader subreddit={subreddit} datetime={datetime} />
        <CardTitle title={title} />
        <CardBody text={body} />
        {media && <PostMedia media={media} title={title} />}
        <CardFooter votes={votes} url={url} />
      </CardContent>
    </Card>
  );
};

export default PostCard;
