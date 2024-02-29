// src/common/utils/sortingFiltering.ts

import { SavedItems, Post, Comment } from "../types/savedItemsTypes";

export const sortData = (data: SavedItems, currentSort: string): SavedItems => {
  let sortedPosts = [...data.content.posts];
  let sortedComments = [...data.content.comments];

  switch (currentSort) {
    case "newest":
      sortedPosts.sort(
        (a, b) =>
          new Date(b.datetime).getTime() - new Date(a.datetime).getTime()
      );
      sortedComments.sort(
        (a, b) =>
          new Date(b.datetime).getTime() - new Date(a.datetime).getTime()
      );
      break;
    case "oldest":
      sortedPosts.sort(
        (a, b) =>
          new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
      );
      sortedComments.sort(
        (a, b) =>
          new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
      );
      break;
    case "lowest_votes":
      sortedPosts.sort((a, b) => a.votes - b.votes);
      sortedComments.sort((a, b) => a.votes - b.votes);
      break;
    case "highest_votes":
      sortedPosts.sort((a, b) => b.votes - a.votes);
      sortedComments.sort((a, b) => b.votes - a.votes);
      break;
    case "saved":
      break;
    default:
      // No default sorting applied
      break;
  }

  return { ...data, content: { posts: sortedPosts, comments: sortedComments } };
};

export const filterPosts = (
  posts: Post[],
  subredditFilter: string,
  yearFilter: string,
  monthFilter: string,
  votesFilter: string
): Post[] => {
  return posts.filter((post) => {
    const postDate = new Date(post.datetime);
    const postYear = postDate.getFullYear().toString();
    const postMonth = (postDate.getMonth() + 1).toString().padStart(2, "0");
    const votesRange = votesFilter.split("-");

    return (
      (!subredditFilter || post.subreddit === subredditFilter) &&
      (!yearFilter || postYear === yearFilter) &&
      (!monthFilter || postMonth === monthFilter) &&
      (!votesFilter ||
        (post.votes >= parseInt(votesRange[0]) &&
          post.votes <= parseInt(votesRange[1])))
    );
  });
};

export const filterComments = (
  comments: Comment[],
  subredditFilter: string,
  yearFilter: string,
  monthFilter: string,
  votesFilter: string
): Comment[] => {
  return comments.filter((comment) => {
    const commentDate = new Date(comment.datetime);
    const commentYear = commentDate.getFullYear().toString();
    const commentMonth = (commentDate.getMonth() + 1)
      .toString()
      .padStart(2, "0");
    const votesRange = votesFilter.split("-");

    return (
      (!subredditFilter || comment.post_subreddit === subredditFilter) &&
      (!yearFilter || commentYear === yearFilter) &&
      (!monthFilter || commentMonth === monthFilter) &&
      (!votesFilter ||
        (comment.votes >= parseInt(votesRange[0]) &&
          comment.votes <= parseInt(votesRange[1])))
    );
  });
};

export const getDropdownOptions = (
  data: SavedItems,
  filterType: string
): { label: string; value: string }[] => {
  switch (filterType) {
    case "subreddit":
      return Object.entries(data.counts.subreddits)
        .map(([key, value]) => ({
          label: `${key}`,
          value: key,
        }))
        .sort((a, b) => a.label.localeCompare(b.label)); // Alphabetically sorts the subreddit options
    case "year":
      return [
        ...new Set(
          Object.keys(data.counts.dates).map((date) => date.split("-")[0])
        ),
      ]
        .map((year) => ({
          label: year,
          value: year,
        }))
        .sort((a, b) => b.value.localeCompare(a.value)); // Sorts years from latest to earliest
    case "votes":
      return Object.keys(data.counts.votes).map((range) => ({
        label: `${range}`,
        value: range,
      }));
    default:
      return [];
  }
};
