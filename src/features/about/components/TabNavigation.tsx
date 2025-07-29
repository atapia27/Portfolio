import { cn } from "../../../shared/utils/cn";
import { TAB_CONFIGS } from "../constants";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="flex justify-center mb-12">
      <div className="flex space-x-2 bg-gray-900/60 backdrop-blur-md rounded-2xl p-2 border border-white/10">
        {TAB_CONFIGS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "flex items-center space-x-2 py-3 px-6 rounded-xl text-sm font-medium transition-all duration-500 ease-out",
              activeTab === tab.id
                ? "bg-gradient-to-r from-neural-500 to-synaptic-500 text-white shadow-lg shadow-neural-500/25 transform scale-105"
                : "text-gray-400 hover:text-white hover:bg-gray-800/50 hover:scale-105",
            )}
          >
            <span className="text-lg">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
} 