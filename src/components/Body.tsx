// src/components/Body.tsx
import React from 'react';
import DropdownBar from './body/DropdownBar';
import ContentTabs from './body/ContentTabs';
import { useSavedItems } from "../common/hooks/useSavedItems";
import { filterPosts, filterComments, getDropdownOptions } from "../common/utils/sortingFiltering";
import { BodyTypes } from '../common/types/bodyTypes'; // Ensure this path is correct

const Body: React.FC<BodyTypes> = ({
  subredditFilter,
  setSubredditFilter,
  yearFilter,
  setYearFilter,
  monthFilter,
  setMonthFilter,
  votesFilter,
  setVotesFilter,
  currentSort
}) => {
  const { savedItems } = useSavedItems(currentSort);

  const filteredPosts = savedItems
    ? filterPosts(savedItems.content.posts, subredditFilter, yearFilter, monthFilter, votesFilter)
    : [];
  
  const filteredComments = savedItems
    ? filterComments(savedItems.content.comments, subredditFilter, yearFilter, monthFilter, votesFilter)
    : [];

  // Only call getDropdownOptions if savedItems is not null
  const subredditOptions = savedItems ? getDropdownOptions(savedItems, "subreddit") : [];
  const yearOptions = savedItems ? getDropdownOptions(savedItems, "year") : [];
  const monthOptions = savedItems ? getDropdownOptions(savedItems, "month") : [];
  const votesOptions = savedItems ? getDropdownOptions(savedItems, "votes") : [];

  return (
    <>
      <div
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <DropdownBar
          subredditFilter={subredditFilter}
          setSubredditFilter={setSubredditFilter}
          yearFilter={yearFilter}
          setYearFilter={setYearFilter}
          monthFilter={monthFilter}
          setMonthFilter={setMonthFilter}
          votesFilter={votesFilter}
          setVotesFilter={setVotesFilter}
          subredditOptions={subredditOptions}
          yearOptions={yearOptions}
          monthOptions={monthOptions}
          votesOptions={votesOptions}
        />
      </div>
      <ContentTabs posts={filteredPosts} comments={filteredComments} />
    </>
  );
};

export default Body;
