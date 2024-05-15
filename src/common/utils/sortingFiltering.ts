// src/common/utils/sortingFiltering.ts

import { SavedItems, Post, Comment } from "../types/savedItemsTypes";

export const sortData = (data: SavedItems, currentSort: string): SavedItems => {
  let sortedPosts = [...data.content.posts];
  let sortedComments = [...data.content.comments];

  switch (currentSort) {
    case "saved":
      break;
    case "reverse":
      sortedPosts.reverse();
      sortedComments.reverse();
      break;
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
  votesFilter: string,
  nsfwFilter: string
): Post[] => {
  return posts.filter((post) => {
    const postDate = new Date(post.datetime);
    const postYear = postDate.getFullYear().toString();
    const votesRange = votesFilter.split("-");

    const nsfwCondition =
      nsfwFilter === "no_nsfw"
        ? !post.nsfw
        : nsfwFilter === "only_nsfw"
        ? post.nsfw
        : true;

    return (
      (!subredditFilter || post.subreddit === subredditFilter) &&
      (!yearFilter || postYear === yearFilter) &&
      (!votesFilter ||
        (post.votes >= parseInt(votesRange[0]) &&
          post.votes <= parseInt(votesRange[1]))) &&
      nsfwCondition
    );
  });
};

export const filterComments = (
  comments: Comment[],
  subredditFilter: string,
  yearFilter: string,
  votesFilter: string,
  nsfwFilter: string
): Comment[] => {
  return comments.filter((comment) => {
    const commentDate = new Date(comment.datetime);
    const commentYear = commentDate.getFullYear().toString();
    const votesRange = votesFilter.split("-");

    const nsfwCondition =
      nsfwFilter === "no_nsfw"
        ? !comment.nsfw
        : nsfwFilter === "only_nsfw"
        ? comment.nsfw
        : true;

    return (
      (!subredditFilter || comment.post_subreddit === subredditFilter) &&
      (!yearFilter || commentYear === yearFilter) &&
      (!votesFilter ||
        (comment.votes >= parseInt(votesRange[0]) &&
          comment.votes <= parseInt(votesRange[1]))) &&
      nsfwCondition
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
    case "nsfw":
      return [
        { label: "All", value: "all" },
        { label: "No NSFW", value: "no_nsfw" },
        { label: "Only NSFW", value: "only_nsfw" },
      ];
    default:
      return [];
  }
};
