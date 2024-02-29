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

  const subredditOptions = savedItems ? getDropdownOptions(savedItems, "subreddit") : [];
  const yearOptions = savedItems ? getDropdownOptions(savedItems, "year") : [];
  const monthOptions = savedItems ? getDropdownOptions(savedItems, "month") : [];
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
      <div style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}>
        <ContentTabs posts={filteredPosts} comments={filteredComments} />
      </div>
    </>
  );
};

export default Body;
