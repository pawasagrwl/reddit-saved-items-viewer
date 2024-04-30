// src/common/types/savedItemsTypes.ts

export interface Post {
  title: string;
  url: string;
  subreddit: string;
  body: string;
  media: string;
  datetime: string;
  votes: number;
  nsfw: boolean
}

export interface Comment {
  post_title: string;
  post_subreddit: string;
  post_url: string;
  comment_url: string;
  comment_text: string;
  datetime: string;
  votes: number;
  nsfw: boolean
}

export interface Counts {
  subreddits: { [key: string]: { posts: number; comments: number } };
  votes: { [key: string]: { posts: number; comments: number } };
  dates: { [key: string]: { posts: number; comments: number } };
}

export interface SavedItems {
  // yearFilter: any;
  last_fetched_on: string;
  last_fetch_duration: number;
  counts: Counts;
  content: {
    posts: Post[];
    comments: Comment[];
  };
}
