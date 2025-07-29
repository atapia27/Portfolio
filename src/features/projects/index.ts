// Main component
export { ProjectsSection } from "./components/ProjectsSection";

// Sub-components
export { ProjectCard } from "./components/ProjectCard";
export { ProjectFilterTabs } from "./components/ProjectFilterTabs";
export { ProjectModal } from "./components/ProjectModal";

// Data
export { projects } from "./data/projects";

// Types
export type { Project } from "./data/projects";
export type { FilterTab } from "./constants";
export type { FilterType } from "./hooks/useProjectFilter";

// Constants
export { FILTER_TABS, FRONTEND_TECHNOLOGIES, BACKEND_TECHNOLOGIES } from "./constants";

// Hooks
export { useProjectFilter } from "./hooks/useProjectFilter";
