export interface FilterTab {
  id: string;
  label: string;
}

export const FILTER_TABS: FilterTab[] = [
  { id: "featured", label: "Featured" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "all", label: "All Projects" },
];

export const FRONTEND_TECHNOLOGIES = [
  "React",
  "Next.js", 
  "Vue",
  "TypeScript",
  "JavaScript"
];

export const BACKEND_TECHNOLOGIES = [
  "Python",
  "FastAPI",
  "SQLAlchemy",
  "Firebase",
  "TensorFlow"
]; 