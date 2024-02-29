// src/common/types/headerTypes.ts
export interface ThemeTogglerProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

export interface SearchBarProps {
  searchTerm: string;
  handleSearchChange: (searchTerm: string) => void;
}

export interface SortSelectorProps {
  currentSort: string;
  handleSortChange: (sortValue: string) => void;
}
export interface HeaderProps {
  darkMode: boolean;
  handleThemeChange: () => void;
  handleSortChange: (sortValue: string) => void;
  currentSort: string;
  searchTerm: string;
  handleSearchChange: (searchTerm: string) => void;
}
