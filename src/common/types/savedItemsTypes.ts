// src/common/types/savedItemsTypes.ts

export interface Post {
  title: string;
  author: string;
  url: string;
  subreddit: string;
  body: string;
  media: string;
  datetime: string;
  votes: number;
  nsfw: boolean;
  flairs: string[];
  archived: boolean
}

export interface Comment {
  post_title: string;
  post_subreddit: string;
  post_url: string;
  comment_url: string;
  comment_text: string;
  author: string;
  datetime: string;
  votes: number;
  nsfw: boolean;
  archived: boolean;
}

export interface Counts {
  subreddits: { [key: string]: { posts: number; comments: number; icon: string } };
  votes: { [key: string]: { posts: number; comments: number } };
  dates: { [key: string]: { posts: number; comments: number } };
}

export interface SavedItems {
  last_fetched_on: string;
  last_fetch_duration: number;
  counts: Counts;
  content: {
    posts: Post[];
    comments: Comment[];
  };
}
