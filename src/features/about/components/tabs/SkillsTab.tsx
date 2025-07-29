import { cn } from "../../../../shared/utils/cn";
import { skills } from "../../data/skills";
import { getSkillGradientClass } from "../../utils/skillUtils";

export function SkillsTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {skills.map((skillGroup, index) => (
        <div
          key={skillGroup.category}
          className="glass-effect rounded-2xl p-8 border border-white/10 hover:border-cognitive-400/30 transition-all duration-500 group hover:scale-[1.02]"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center mb-6">
            <div className={cn(
              "w-14 h-14 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300",
              `bg-gradient-to-r ${getSkillGradientClass(skillGroup.category)}`
            )}>
              <span className="text-2xl">{skillGroup.icon}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-cognitive-400 mb-1">
                {skillGroup.category}
              </h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-cognitive-400 to-transparent rounded-full"></div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 max-h-[115px] overflow-y-auto pr-2 custom-scrollbar">
            {skillGroup.items.map((skill) => (
              <div
                key={skill}
                className="group/item flex-shrink-0"
              >
                <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50 hover:border-cognitive-400/50 transition-all duration-300 hover:scale-105 hover:bg-gray-800/70">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-neural-400 to-synaptic-400 rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-300 text-sm font-medium group-hover/item:text-white transition-colors duration-300 whitespace-nowrap">
                      {skill}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 