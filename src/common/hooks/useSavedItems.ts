// src/common/hooks/useSavedItems.ts
import savedItemsData from '../../data/saved_items.json';
import { useState, useEffect } from "react";
import { SavedItems } from "../types/savedItemsTypes";
import { sortData } from "../utils/sortingFiltering";

export const useSavedItems = (currentSort: string) => {
  const [savedItems, setSavedItems] = useState<SavedItems | null>(null);

  useEffect(() => {
    // No fetch needed, use imported data
    setSavedItems(sortData(savedItemsData, currentSort));
  }, [currentSort]);

  return { savedItems, setSavedItems };
};
