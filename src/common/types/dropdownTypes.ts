// src/common/types/dropdownTypes.ts

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

export interface DropdownBarProps {
  subredditFilter: string;
  yearFilter: string;
  monthFilter: string;
  votesFilter: string;
  setSubredditFilter: React.Dispatch<React.SetStateAction<string>>;
  setYearFilter: React.Dispatch<React.SetStateAction<string>>;
  setMonthFilter: React.Dispatch<React.SetStateAction<string>>;
  setVotesFilter: React.Dispatch<React.SetStateAction<string>>;
  subredditOptions: DropdownOption[];
  yearOptions: DropdownOption[];
  monthOptions: DropdownOption[];
  votesOptions: DropdownOption[];
}
