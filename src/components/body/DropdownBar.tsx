import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import RefreshIcon from "@mui/icons-material/Refresh";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // Icon for expanding
import ExpandLessIcon from "@mui/icons-material/ExpandLess"; // Icon for collapsing
import Dropdown from "./Dropdown";
import { DropdownBarProps } from "../../common/types/dropdownTypes";
import { useTheme } from "../../common/context/ThemeContext";
import Button from "@mui/material/Button"; // Import Button for the clickable area
import { IconButton } from "@mui/material";

const DropdownBar: React.FC<DropdownBarProps> = ({
  subredditFilter,
  yearFilter,
  votesFilter,
  nsfwFilter,
  setSubredditFilter,
  setYearFilter,
  setVotesFilter,
  setNsfwFilter,
  subredditOptions,
  yearOptions,
  votesOptions,
  nsfwOptions
}) => {
  const { darkMode } = useTheme(); // use the darkMode value from ThemeContext
  const [filtersVisible, setFiltersVisible] = useState(true); // State to toggle visibility
  
  const resetFilters = () => {
    setSubredditFilter("");
    setYearFilter("");
    setVotesFilter("");
    setNsfwFilter("");
  };
  const toggleFiltersVisibility = () => {
    setFiltersVisible(!filtersVisible);
  };
  return (
    <div
      style={{
        padding: "8px 20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Tooltip title="Toggle Filters">
          {/* Replace IconButton with Button and include both text and icon */}
          <Button
            onClick={toggleFiltersVisibility}
            endIcon={filtersVisible ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            style={{ textTransform: "none" }} // Prevents uppercase transformation by default
          >
            Filter Items
          </Button>
        </Tooltip>
      </div>
      {filtersVisible && (
        <>
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
            label="Votes"
            value={votesFilter}
            onChange={setVotesFilter}
            options={votesOptions}
          />
          <Dropdown
            label="NSFW"
            value={nsfwFilter}
            onChange={setNsfwFilter}
            options={nsfwOptions}
          />
          <Tooltip title="Reset Filters">
            <IconButton
              onClick={resetFilters}
              color={darkMode ? "primary" : "default"}
            >
              <RefreshIcon />
            </IconButton>
          </Tooltip>
        </>
      )}
    </div>
  );
};

export default DropdownBar;
