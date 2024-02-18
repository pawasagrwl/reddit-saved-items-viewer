// src/RedditSavedItemsTypes.ts

export interface Post {
  title: string;
  url: string;
  subreddit: string;
  body: string;
  media: string;
  datetime: string;
  votes: number;
}

export interface Comment {
  post_title: string;
  post_url: string;
  post_media: string;
  comment_url: string;
  comment_text: string;
  datetime: string;
  votes: number;
}

export interface SavedItems {
  last_pulled: string;
  content: {
    posts: Post[];
    comments: Comment[];
  };
}
