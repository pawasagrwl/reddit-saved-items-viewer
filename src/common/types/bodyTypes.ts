// src/common/types/types.ts
import { DropdownOption } from './dropdownTypes';

export interface BodyTypes {
  subredditFilter: string;
  setSubredditFilter: React.Dispatch<React.SetStateAction<string>>;
  yearFilter: string;
  setYearFilter: React.Dispatch<React.SetStateAction<string>>;
  nsfwFilter: string;
  setNsfwFilter: React.Dispatch<React.SetStateAction<string>>;
  votesFilter: string;
  setVotesFilter: React.Dispatch<React.SetStateAction<string>>;
  currentSort: string;
}
