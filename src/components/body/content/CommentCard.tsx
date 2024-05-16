// src/components/comments/CommentCard.tsx

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CommentCardProps } from "../../../common/types/contentTypes";
import CardHeader from "./card/CardHeader";
import CardBody from "./card/CardBody";
import CardFooter from "./card/CardFooter";
import ItemModal from "../../modals/ItemModal";

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
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Card sx={{ margin: 2 }}>
        <CardContent>
          <CardHeader
            title={postTitle}
            author={author}
            subreddit={subreddit}
            datetime={datetime}
          />
          <CardBody text={commentText} media={""} onClick={handleOpen} />
          <CardFooter votes={votes} url={postUrl} commentUrl={commentUrl} />
        </CardContent>
      </Card>
      <ItemModal open={open} onClose={handleClose} title={postTitle} body={commentText} />
    </>
  );
};

export default CommentCard;
