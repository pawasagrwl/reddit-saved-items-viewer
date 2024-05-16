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
import ItemModal from "../../modals/ItemModal";

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
  archived,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card sx={{ margin: 2 }}>
        <CardContent>
          <CardHeader
            title={title}
            author={author}
            subreddit={subreddit}
            datetime={datetime}
          />
          <FlairsBar flairs={flairs} nsfw={nsfw} archived={archived} />
          <CardBody text={body} media={media} onClick={handleOpen} />
          <CardFooter votes={votes} url={url} />
        </CardContent>
      </Card>

      <ItemModal open={open} onClose={handleClose} title={title} body={body} />
    </>
  );
};

export default PostCard;
