import { useState, useMemo } from "react";
import { projects } from "../data/projects";
import { FRONTEND_TECHNOLOGIES, BACKEND_TECHNOLOGIES } from "../constants";

export type FilterType = "all" | "featured" | "frontend" | "backend";

export function useProjectFilter() {
  const [filter, setFilter] = useState<FilterType>("featured");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      switch (filter) {
        case "all":
          return true;
        case "featured":
          return project.featured;
        case "frontend":
          return project.technologies.some(tech => 
            FRONTEND_TECHNOLOGIES.includes(tech)
          );
        case "backend":
          return project.technologies.some(tech => 
            BACKEND_TECHNOLOGIES.includes(tech)
          );
        default:
          return true;
      }
    });
  }, [filter]);

  return {
    filter,
    setFilter,
    filteredProjects,
  };
} 