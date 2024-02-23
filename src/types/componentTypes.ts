// src/types/componentTypes.ts

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
