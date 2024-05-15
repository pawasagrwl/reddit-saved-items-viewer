// src/common/types/contentTypes.ts

import { Post, Comment } from "./savedItemsTypes";

export interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

export interface ContentTabsProps {
  posts: Post[];
  comments: Comment[];
}

export interface PostCardProps {
  title: string;
  author: string;
  subreddit: string;
  datetime: string;
  body: string;
  media: string;
  votes: number;
  url: string;
}

export interface CommentCardProps {
  postTitle: string;
  subreddit: string;
  datetime: string;
  commentText: string;
  author: string;
  votes: number;
  postUrl: string;
  commentUrl: string;
}
