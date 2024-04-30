// src/common/types/dropdownTypes.ts

export interface DropdownProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
}

export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownBarProps {
  subredditFilter: string;
  yearFilter: string;
  nsfwFilter: string;
  votesFilter: string;
  setSubredditFilter: React.Dispatch<React.SetStateAction<string>>;
  setYearFilter: React.Dispatch<React.SetStateAction<string>>;
  setNsfwFilter: React.Dispatch<React.SetStateAction<string>>;
  setVotesFilter: React.Dispatch<React.SetStateAction<string>>;
  subredditOptions: DropdownOption[];
  yearOptions: DropdownOption[];
  nsfwOptions: DropdownOption[];
  votesOptions: DropdownOption[];
}
