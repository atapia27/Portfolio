// Main component
export { AboutSection } from "./components/AboutSection";

// Tab components
export { BackgroundTab } from "./components/tabs/BackgroundTab";
export { SkillsTab } from "./components/tabs/SkillsTab";
export { ExperienceTab } from "./components/tabs/ExperienceTab";
export { ResumeTab } from "./components/tabs/ResumeTab";

// Utility components
export { TabNavigation } from "./components/TabNavigation";
export { TabContent } from "./components/TabContent";

// Data
export { skills } from "./data/skills";
export { experiences } from "./data/experiences";

// Types
export type { SkillGroup } from "./data/skills";
export type { Experience } from "./data/experiences";
export type { TabConfig, BackgroundCard, ResumeDownloadConfig } from "./types";

// Constants
export { TAB_CONFIGS, BACKGROUND_CARDS, RESUME_CONFIG } from "./constants";

// Hooks
export { useTabNavigation } from "./hooks/useTabNavigation";

// Utils
export { getSkillGradientClass, getSkillColorClass } from "./utils/skillUtils";
