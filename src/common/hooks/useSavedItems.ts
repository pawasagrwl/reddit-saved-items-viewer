// src/common/hooks/useSavedItems.ts

import { useState, useEffect } from "react";
import { SavedItems } from "../types/savedItemsTypes";
import { sortData } from "../utils/sortingFiltering";

export const useSavedItems = (currentSort: string) => {
  const [savedItems, setSavedItems] = useState<SavedItems | null>(null);

  useEffect(() => {
    fetch("/saved_items.json")
      .then((response) => response.json())
      .then((data: SavedItems) => {
        setSavedItems(sortData(data, currentSort));
      })
      .catch((error) => console.error("Error fetching saved items:", error));
  }, [currentSort]);

  return { savedItems, setSavedItems };
};
