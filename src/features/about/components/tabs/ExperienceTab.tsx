import { useState } from "react";
import { cn } from "../../../../shared/utils/cn";
import { experiences } from "../../data/experiences";

export function ExperienceTab() {
  const [activeExperience, setActiveExperience] = useState(0);

  return (
    <div className="space-y-6">
      {/* Navigation Dots */}
      <div className="flex justify-center space-x-3 mb-8">
        {experiences.map((exp, index) => (
          <button
            key={index}
            onClick={() => setActiveExperience(index)}
            className={cn(
              "relative group",
              activeExperience === index
                ? "scale-125"
                : ""
            )}
          >
            <div className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              activeExperience === index
                ? "bg-gradient-to-r from-neural-400 to-synaptic-400"
                : "bg-gray-600 hover:bg-gray-500"
            )} />
            <div className={cn(
              "absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs font-medium transition-all duration-300 whitespace-nowrap",
              "opacity-0 group-hover:opacity-100 scale-100"
            )}>
              {exp.title} at {exp.company}
            </div>
          </button>
        ))}
      </div>

      {/* Experience Content */}
      <div className="relative">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className={cn(
              "glass-effect rounded-2xl p-8 border border-white/10 hover:border-neural-400/30 transition-all duration-500 group hover:scale-[1.02]",
              activeExperience === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 absolute inset-0 pointer-events-none"
            )}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neural-400 transition-colors duration-300">
                  {exp.title}
                </h3>
                <p className="text-neural-400 text-lg font-medium mb-2">{exp.company}</p>
                <p className="text-gray-300 text-base leading-relaxed mb-4">
                  {exp.description}
                </p>
              </div>
              <div className="lg:ml-8 mb-4 lg:mb-0">
                <span className="inline-block bg-gradient-to-r from-neural-500 to-synaptic-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {exp.period}
                </span>
              </div>
            </div>
            
            {/* Technologies */}
            {exp.technologies && (
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block bg-gray-800/70 text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-gray-700/50 hover:border-neural-400/50 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Achievements */}
            <div className="space-y-4">
              {exp.achievements.map((achievement, achievementIndex) => (
                <div
                  key={achievementIndex}
                  className="flex items-start space-x-3 bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-neural-400/50 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-cognitive-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 