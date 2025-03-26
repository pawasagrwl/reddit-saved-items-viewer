// src/components/Body.tsx
import React from 'react';
import DropdownBar from './body/DropdownBar';
import ContentTabs from './body/ContentTabs';
import { useSavedItems } from "../common/hooks/useSavedItems";
import { filterPosts, filterComments, getDropdownOptions } from "../common/utils/sortingFiltering";
import { BodyTypes } from '../common/types/bodyTypes';

const Body: React.FC<BodyTypes> = ({
  subredditFilter,
  setSubredditFilter,
  yearFilter,
  setYearFilter,
  nsfwFilter,
  setNsfwFilter,
  votesFilter,
  setVotesFilter,
  currentSort,
  searchTerm
}) => {
  const { savedItems } = useSavedItems(currentSort);

  const filteredPosts = savedItems
    ? filterPosts(savedItems.content.posts, subredditFilter, yearFilter, votesFilter, nsfwFilter).filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : [];
  
  const filteredComments = savedItems
    ? filterComments(savedItems.content.comments, subredditFilter, yearFilter, votesFilter, nsfwFilter).filter((comment) =>
      comment.comment_text.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : [];

  const subredditOptions = savedItems ? getDropdownOptions(savedItems, "subreddit") : [];
  const yearOptions = savedItems ? getDropdownOptions(savedItems, "year") : [];
  const nsfwOptions = savedItems ? getDropdownOptions(savedItems, "nsfw") : [];
  const votesOptions = savedItems ? getDropdownOptions(savedItems, "votes") : [];

  return (
    <>
      <div style={{
          padding: "0.5px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}>
        <DropdownBar
          subredditFilter={subredditFilter}
          setSubredditFilter={setSubredditFilter}
          yearFilter={yearFilter}
          setYearFilter={setYearFilter}
          nsfwFilter={nsfwFilter}
          setNsfwFilter={setNsfwFilter}
          votesFilter={votesFilter}
          setVotesFilter={setVotesFilter}
          subredditOptions={subredditOptions}
          yearOptions={yearOptions}
          nsfwOptions={nsfwOptions}
          votesOptions={votesOptions}
        />
      </div>
      <div style={{ overflowY: 'auto' }}>
        <ContentTabs posts={filteredPosts} comments={filteredComments} />
      </div>
    </>
  );
};

export default Body;
