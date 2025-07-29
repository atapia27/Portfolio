import { BackgroundTab } from "./tabs/BackgroundTab";
import { SkillsTab } from "./tabs/SkillsTab";
import { ExperienceTab } from "./tabs/ExperienceTab";
import { ResumeTab } from "./tabs/ResumeTab";

interface TabContentProps {
  activeTab: string;
}

export function TabContent({ activeTab }: TabContentProps) {
  return (
    <div className="min-h-[500px] animate-fade-in">
      {activeTab === "background" && <BackgroundTab />}
      {activeTab === "skills" && <SkillsTab />}
      {activeTab === "experience" && <ExperienceTab />}
      {activeTab === "resume" && <ResumeTab />}
    </div>
  );
} 