// src/components/posts/PostCard.tsx
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { PostCardProps } from "../../../common/types/contentTypes";
import CardHeader from "./card/CardHeader";

import CardBody from "./card/CardBody";
import PostMedia from "./PostMedia";
import CardFooter from "./card/CardFooter";
import FlairsBar from "./card/FlairsBar";

const PostCard: React.FC<PostCardProps> = ({
  title,
  author,
  subreddit,
  datetime,
  body,
  media,
  votes,
  url,
  flairs,
  nsfw,
  archived
}) => {
  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <CardHeader title={title} author = {author} subreddit={subreddit} datetime={datetime} />
        <FlairsBar flairs={flairs} nsfw={nsfw} archived={archived} />

        <CardBody text={body} />
        {media && <PostMedia media={media} title={title} />}
        <CardFooter votes={votes} url={url} />
      </CardContent>
    </Card>
  );
};

export default PostCard;
