import { useState } from "react";
import { cn } from "../../../shared/utils/cn";

const skills = [
  {
    category: "Cognitive Science",
    items: [
      "Human Attention",
      "Decision Making",
      "Information Processing",
      "User Experience Research",
    ],
  },
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Three.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL"],
  },
  {
    category: "Design",
    items: [
      "User Interface Design",
      "Information Architecture",
      "Interaction Design",
      "Prototyping",
    ],
  },
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Company",
    period: "2022 - Present",
    description:
      "Leading development of user-centric applications with focus on cognitive load optimization and decision-making interfaces.",
  },
  {
    title: "UX Research Engineer",
    company: "Research Lab",
    period: "2020 - 2022",
    description:
      "Conducted research on human-computer interaction, focusing on attention patterns and information processing under stress.",
  },
  {
    title: "Full Stack Developer",
    company: "Startup",
    period: "2018 - 2020",
    description:
      "Built scalable systems with emphasis on user experience and cognitive psychology principles.",
  },
];

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("background");

  return (
    <section
      id="about"
      className="section-container py-20 relative overflow-hidden"
      style={{
        backgroundImage: "url(/background.gif)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                <span className="gradient-text">About</span> My Approach
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                My unique background in Cognitive Science and Computer Science
                gives me a distinctive lens on software engineering. I
                understand how humans process information, make decisions under
                complexity, and interact with technology.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-gray-900/50 rounded-lg p-1">
              {["background", "skills", "experience"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-300",
                    activeTab === tab
                      ? "bg-neural-500 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50",
                  )}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {activeTab === "background" && (
                <div className="space-y-6">
                  <div className="glass-effect rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-neural-400 mb-3">
                      The Intersection
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      I care deeply about how people interpret information under
                      stress, how they make decisions when presented with
                      ambiguity, and how good interfaces can reduce friction and
                      build confidence.
                    </p>
                  </div>

                  <div className="glass-effect rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-synaptic-400 mb-3">
                      My Philosophy
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Every technical decision should be informed by
                      understanding of human cognition. From backend data
                      structures to frontend interactions, I design systems that
                      align with how users naturally think and work.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "skills" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skillGroup) => (
                    <div
                      key={skillGroup.category}
                      className="glass-effect rounded-xl p-6"
                    >
                      <h3 className="text-lg font-semibold text-cognitive-400 mb-3">
                        {skillGroup.category}
                      </h3>
                      <div className="space-y-2">
                        {skillGroup.items.map((skill) => (
                          <div
                            key={skill}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-2 h-2 bg-neural-400 rounded-full"></div>
                            <span className="text-gray-300 text-sm">
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "experience" && (
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="glass-effect rounded-xl p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {exp.title}
                          </h3>
                          <p className="text-neural-400">{exp.company}</p>
                        </div>
                        <span className="text-sm text-gray-400">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
