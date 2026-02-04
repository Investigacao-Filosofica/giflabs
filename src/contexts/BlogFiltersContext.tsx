"use client";

import { createContext, useContext, useState, useCallback } from "react";

interface BlogFiltersContextType {
  showFilters: boolean;
  toggleFilters: () => void;
  closeFilters: () => void;
}

const BlogFiltersContext = createContext<BlogFiltersContextType | undefined>(undefined);

export function BlogFiltersProvider({ children }: { children: React.ReactNode }) {
  const [showFilters, setShowFilters] = useState(false);
  const toggleFilters = useCallback(() => setShowFilters((prev) => !prev), []);
  const closeFilters = useCallback(() => setShowFilters(false), []);

  return (
    <BlogFiltersContext.Provider value={{ showFilters, toggleFilters, closeFilters }}>
      {children}
    </BlogFiltersContext.Provider>
  );
}

export function useBlogFilters() {
  const context = useContext(BlogFiltersContext);
  return context;
}
