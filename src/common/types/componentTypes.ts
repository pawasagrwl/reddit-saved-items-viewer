// src/types/componentTypes.ts

import { Post } from "./savedItemsTypes";

export interface DropdownProps {
  label: string;
  value: string;
  onChange: (value: string) => void; // Adjusted to expect a string directly
  options: { label: string; value: string }[];
}

export interface DropdownOption {
  label: string;
  value: string;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

export interface ContentTabsProps {
  posts: Post[];
  comments: Comment[];
}

export interface ThemeTogglerProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

export interface SearchBarProps {
  searchTerm: string;
  handleSearchChange: (searchTerm: string) => void;
}

export interface SortSelectorProps {
  currentSort: string;
  handleSortChange: (sortValue: string) => void;
}
export interface HeaderProps {
  darkMode: boolean;
  handleThemeChange: () => void;
  handleSortChange: (sortValue: string) => void;
  currentSort: string;
  searchTerm: string;
  handleSearchChange: (searchTerm: string) => void;
}

export interface PostCardProps {
  title: string;
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
  votes: number;
  postUrl: string;
  commentUrl: string;
}
