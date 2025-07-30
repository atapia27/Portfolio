import { cn } from "../../../shared/utils/cn";
import { FILTER_TABS } from "../constants";
import type { FilterType } from "../hooks/useProjectFilter";

interface ProjectFilterTabsProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export function ProjectFilterTabs({ filter, onFilterChange }: ProjectFilterTabsProps) {
  return (
    <div className="flex justify-center mb-8 sm:mb-12 px-2 sm:px-0">
      <div className="flex space-x-1 bg-gray-900/50 rounded-lg p-1 overflow-x-auto max-w-full">
        {FILTER_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onFilterChange(tab.id as FilterType)}
            className={cn(
              "px-3 sm:px-6 py-2 sm:py-3 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0",
              filter === tab.id
                ? "bg-neural-500 text-white shadow-lg"
                : "text-gray-400 hover:text-white hover:bg-gray-800/50",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
} 