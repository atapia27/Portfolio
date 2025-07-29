import { useState } from "react";
import { cn } from "../../../shared/utils/cn";

const skills = [

  {
    category: "Frontend",
    icon: "⚛️",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Zustand",
      "Tailwind",
      "HTML5",
      "CSS",
      "Framer Motion",
      "Three.js",
      "WebGL",
      "Sass",
      "Styled Components",
      "GraphQL",
    ],
  },
  {
    category: "Backend",
    icon: "🔧",
    items: [
      "Python",
      "FastAPI",
      "Node.js",
      "Express",
      "PostgreSQL",
      "REST API",
      "RESTful API",
      "Prisma",
      "SQLAlchemy",
      "Redis",
      "Firebase",
      "Azure",
      "AWS",
      "Git",
      "Bash",
    ],
  },
  {
    category: "AI and Machine Learning",
    icon: "🤖",
    items: [
      "Supervised Learning",
      "Classification Models",
      "Model Evaluation",
      "Regression Analysis",
      "Data Processing Pipelines",
      "Cross Validation",
      "NumPy",
      "Pandas",
    ],
  },
  {
    category: "Research Based Design",
    icon: "🎯",
    items: [
      "Human Attention",
      "Decision Making",
      "Information Processing",
      "User Experience Research",
      "User Interface Design",
      "Information Architecture",
      "Interaction Design",
      "Prototyping",
    ],
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company: "Stealth Startup",
    period: "Feb 2024 - Present (1y 5m)",
    description: "Saas analytics, client solutions",
    technologies: ["SQL", "React", "Python", "Node.js", "Postgres", "Next.js", "Tailwind CSS"],
    achievements: [
      "Built internal design system from scratch using React, enabling engineers to implement complex UI patterns 40% faster through composable, accessible components. Reduced feedback integration time from days to hours, allowing the team to align on prototypes within 1–2 working sessions instead of full sprint cycles.",
      "Integrated AI search functionality using OpenAI GPT-4o API and Elasticsearch, enabling non-technical users to retrieve campaign insights while maintaining security through prompt sanitization and role-aware access controls.",
      "Implemented real-time analytics and custom filters into the dashboard, allowing stakeholders to monitor performance and user engagement metrics with greater precision and responsiveness."
    ],
  },
  {
    title: "Frontend Developer",
    company: "Quorus",
    period: "May 2023 - Feb 2024 (9m)",
    description: "Investment platform providing accessibility in Finance",
    technologies: ["SQL", "AWS", "TypeScript", "Redux", "Python", "Azure", "Next.js", "FastAPI"],
    achievements: [
      "Led migration from Vue to Next.js, architecting a component library in TypeScript and Tailwind that increased UI consistency, reduced frontend maintenance effort, and improved page load performance by 15%.",
      "Leveraged unique approach rooted in cognitive science to build an investment dashboard, integrating continuous user feedback and aligning technical choices with how users process complex financial data under uncertainty, reducing cognitive friction and increasing clarity, trust, and decision confidence.",
      "Improved real-time data performance, optimized data retrieval, and minimized payload sizes, reducing API response times by 400ms and enhancing the user experience in dynamic scenarios, such as fluctuating stock prices."
    ],
  },
  {
    title: "Frontend Developer",
    company: "Breakout LA",
    period: "Oct 2022 - Apr 2023 (6m)",
    description: "eCommerce",
    technologies: ["React", "CSS", "Redux", "React Native", "HTML", "Figma", "REST API"],
    achievements: [
      "Accelerated product listing processes through deployed functionality for user product submissions, reducing time to market from up to 7 days to under 24 hours and boosting weekly product availability.",
      "Aligned platform branding and UI/UX in collaboration with the client and designer to create a visually cohesive, user-centered experience, cutting navigation-related support tickets by nearly 50%.",
      "Enhanced platform stability through rigorous testing protocols, simulating high-traffic conditions to identify and resolve potential issues before launch, increasing uptime by 40% during high-traffic product launches to improve reliability and user trust."
    ],
  },
  {
    title: "Python AI and ML Tutor",
    company: "UCLA",
    period: "Jun 2020 - Sep 2022 (2y 3m)",
    description: "Tutor for UCLA python class, based on merit / performance",
    technologies: ["Python", "Machine Learning", "AI", "Education"],
    achievements: [
      "Enhanced instruction on Python fundamentals and introductory machine learning concepts, including supervised learning, classification algorithms, model evaluation, and data manipulation, strengthening student understanding of AI-driven programming practices.",
      "Supported over 150 students through labs, discussions, and one-on-one mentoring, helping them master programming concepts and foundational machine learning topics such as regression analysis, cross-validation, and basic neural networks.",
      "Collaborated with faculty to design and align lesson plans focused on AI and algorithmic thinking, enhancing curriculum consistency and improving student ability to translate theoretical concepts into practical coding projects."
    ],
  },
];

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("background");
  const [activeExperience, setActiveExperience] = useState(0);

  return (
    <section
      id="about"
      className="section-container py-20 relative overflow-hidden bg-background-gif bg-cover bg-center bg-no-repeat bg-fixed"
    >
      {/* Enhanced overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 backdrop-blur-sm"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <h2 className="text-6xl font-bold mb-4 animate-fade-in">
              <span className="gradient-text">About</span> Me 
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neural-400 to-synaptic-400 mx-auto rounded-full"></div>
          </div>

          {/* Enhanced Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2 bg-gray-900/60 backdrop-blur-md rounded-2xl p-2 border border-white/10">
              {[
                { id: "background", label: "Background", icon: "🎯" },
                { id: "skills", label: "Skills", icon: "⚡" },
                { id: "experience", label: "Experience", icon: "🚀" },
                { id: "resume", label: "Resume", icon: "⬇️" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
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

          {/* Enhanced Tab Content */}
          <div className="min-h-[500px] animate-fade-in">
            {activeTab === "background" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="glass-effect rounded-2xl p-8 border border-white/10 hover:border-neural-400/30 transition-all duration-500 group">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-neural-400 to-neural-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">✨</span>
                    </div>
                    <h3 className="text-2xl font-bold text-neural-400">
                      My Focus
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    I gravitate most towards frontend architecture and interface design, especially when the goal is to simplify complex systems or guide user decision-making. My background in cognitive science shapes how I approach everything from layout to interaction patterns.
                  </p>
                </div>

                <div className="glass-effect rounded-2xl p-8 border border-white/10 hover:border-synaptic-400/30 transition-all duration-500 group">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-synaptic-400 to-synaptic-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🧠</span>
                    </div>
                    <h3 className="text-2xl font-bold text-synaptic-400">
                      Cognitive Approach
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    I think deeply about how people process information, what causes friction or hesitation, and how interface structure can either overwhelm or empower. For me, building good systems means more than technical correctness, it means aligning with how people actually think, feel, and behave under real-world conditions.
                  </p>
                </div>

                <div className="glass-effect rounded-2xl p-8 border border-white/10 hover:border-cognitive-400/30 transition-all duration-500 group lg:col-span-2">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cognitive-400 to-cognitive-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">💡</span>
                    </div>
                    <h3 className="text-2xl font-bold text-cognitive-400">
                      My Mission
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    I care most about building systems that reduce friction, improve clarity, and support growth. My background in cognitive science has shaped how I think about design and decision-making, and I bring that perspective into every technical layer I work on. I'm especially motivated by roles where engineering choices have a real impact on both the tools teams rely on and the outcomes they help enable.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "skills" && (
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
                        skillGroup.category === "Research Based Design" && "bg-gradient-to-r from-neural-400 to-neural-600",
                        skillGroup.category === "Frontend" && "bg-gradient-to-r from-synaptic-400 to-synaptic-600",
                        skillGroup.category === "Backend" && "bg-gradient-to-r from-cognitive-400 to-cognitive-600",
                        skillGroup.category === "AI and Machine Learning" && "bg-gradient-to-r from-green-400 to-green-600"
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
                      {skillGroup.items.map((skill, skillIndex) => (
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
            )}

            {activeTab === "experience" && (
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
            )}

            {activeTab === "resume" && (
              <div className="animate-fade-in">
                <div className="glass-effect rounded-2xl p-12 border border-white/10 hover:border-neural-400/30 transition-all duration-500 group">
                  <div className="text-center">
                    <div className="mb-12">
                      <h3 className="text-4xl font-bold text-white mb-6">
                        Download My Resume
                      </h3>
                      <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">
                        Get a detailed overview of my experience, skills, and achievements in a comprehensive PDF format.
                      </p>
                    </div>
                    
                    <div className="flex justify-center mb-12">
                      <button
                        onClick={() => {
                          // Add your resume download logic here
                          const link = document.createElement('a');
                          link.href = '/Resume.pdf'; // Update with your actual resume path
                          link.download = 'Alejandro_Tapia_Resume.pdf';
                          link.click();
                        }}
                        className="group relative"
                      >
                        <div className="w-32 h-32 bg-gradient-to-r from-neural-400 to-synaptic-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-neural-400/25">
                          <svg
                            className="w-12 h-12 text-white transition-transform duration-300 group-hover:scale-110"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-full text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Download PDF
                        </div>
                      </button>
                    </div>
                    
                    <div className="text-gray-400 text-base">
                      <p>Available formats: PDF</p>
                      <p className="mt-2">Last updated: {new Date().toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
