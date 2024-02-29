// src/components/DropdownBar.tsx
import React from "react";
import Dropdown from "./Dropdown";
import { DropdownBarProps, DropdownOption } from "../../common/types/dropdownTypes"; // Adjust types as needed

const DropdownBar: React.FC<DropdownBarProps> = ({
  subredditFilter,
  yearFilter,
  monthFilter,
  votesFilter,
  setSubredditFilter,
  setYearFilter,
  setMonthFilter,
  setVotesFilter,
  subredditOptions,
  yearOptions,
  monthOptions,
  votesOptions,
}) => {
  const resetFilters = () => {
    setSubredditFilter("");
    setYearFilter("");
    setMonthFilter("");
    setVotesFilter("");
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Dropdown
        label="Subreddit"
        value={subredditFilter}
        onChange={setSubredditFilter}
        options={subredditOptions}
      />
      <Dropdown
        label="Year"
        value={yearFilter}
        onChange={setYearFilter}
        options={yearOptions}
      />
      <Dropdown
        label="Month"
        value={monthFilter}
        onChange={setMonthFilter}
        options={monthOptions}
      />
      <Dropdown
        label="Votes"
        value={votesFilter}
        onChange={setVotesFilter}
        options={votesOptions}
      />
      <button
        onClick={resetFilters}
        style={
          {
            /* Add your button styling here */
          }
        }
      >
        Reset Filters
      </button>
    </div>
  );
};

export default DropdownBar;
