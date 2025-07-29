import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { cn } from "../../../shared/utils/cn";
import type { Project } from "../../../shared/types";

const projects: Project[] = [
  {
    id: "dog-adoption-platform",
    title: "Dog Adoption Platform",
    description:
      "Modern web app with secure auth, advanced filtering and search, and a custom matching algorithm. Built with feature-based architecture, atomic state via Zustand, and modern React patterns like custom hooks and conditional styling, using Next.js, clsx, tailwind-merge, and TypeScript.",
    technologies: ["Next.js", "TypeScript", "Zustand", "Tailwind", "clsx", "tailwind-merge"],
    image: "/img/dogAdopt.png",
    link: "https://alex-tapia-fetch.netlify.app/",
    github: "https://github.com/atapia27/Fetch-frontend-take-home",
    featured: true,
  },
  {
    id: "edtech-social-app",
    title: "EdTech Video Social Media App",
    description:
      "Full Stack social media app featuring video uploads, feed browsing, topic filtering, user profiles, and real-time commenting",
    technologies: ["Next.js", "Zustand", "Tailwind", "FastAPI", "Python", "SQLAlchemy"],
    image: "/img/SocialApp.png",
    link: "https://social-app-video-atapia.netlify.app/",
    github: "https://github.com/atapia27/Social-Application",
    featured: true,
  },
  {
    id: "studyhub",
    title: "StudyHub",
    description:
      "Study tool providing customizable music, ambient sounds, and themes, enhancing productivity and focus for users during study sessions",
    technologies: ["React", "TypeScript", "Tailwind", "MobX", "Vitest"],
    image: "/img/StudyHub.png",
    link: "https://studyhub-alejandro-tapia.netlify.app/",
    github: "https://github.com/atapia27/studyHub",
    featured: true,
  },
  {
    id: "chat-application",
    title: "Chat Application",
    description:
      "Web messaging platform with login functionality, conversation history tracking, text & image functionality, and profile customization using React, Firebase, JavaScript, and TypeScript",
    technologies: ["React", "Firebase", "JavaScript", "TypeScript", "Python"],
    image: "/img/Chat.png",
    link: "https://chat-application-alejandro-tapia.netlify.app",
    github: "https://github.com/atapia27/Alejandro_Tapia_ChatApplication",
    featured: false,
  },
  {
    id: "stock-predictor",
    title: "Stock Predictor",
    description:
      "Web application allowing users to search for company relevant stock information, predicting future trends, and generating forecast plots components for up to 4 years",
    technologies: ["Python", "TensorFlow", "Prophet API"],
    image: "/img/Stock.png",
    link: "https://stockpredictor.streamlit.app/",
    github: "https://github.com/atapia27/Stock-Predictor",
    featured: false,
  },
  {
    id: "personal-website",
    title: "Personal Website (Legacy)",
    description:
      "My previous personal website built with Vue.js. This was my first portfolio showcasing skills and projects. Currently archived as I've moved to this new React-based portfolio.",
    technologies: ["Vue", "Tailwind", "JavaScript"],
    image: "/img/Portfolio.png",
    link: undefined,
    github: "https://github.com/atapia27/atapia27.github.io",
    featured: false,
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<
    "all" | "featured" | "frontend" | "backend"
  >("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "featured") return project.featured;
    if (filter === "frontend")
      return (
        project.technologies.includes("React") ||
        project.technologies.includes("Next.js") ||
        project.technologies.includes("Vue") ||
        project.technologies.includes("TypeScript") ||
        project.technologies.includes("JavaScript")
      );
    if (filter === "backend")
      return (
        project.technologies.includes("Python") ||
        project.technologies.includes("FastAPI") ||
        project.technologies.includes("SQLAlchemy") ||
        project.technologies.includes("Firebase") ||
        project.technologies.includes("TensorFlow")
      );
    return true;
  });

  return (
    <section
      id="projects"
      className="section-container py-20 relative overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/background.gif')" }}
    >
      {/* Enhanced overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 backdrop-blur-sm"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Projects</span> & Research
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of full-stack applications, tools, and projects showcasing
            modern web development, AI/ML integration, and user-focused design.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1 bg-gray-900/50 rounded-lg p-1">
            {[
              { id: "featured", label: "Featured" },
              { id: "frontend", label: "Frontend" },
              { id: "backend", label: "Backend" },
              { id: "all", label: "All Projects" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={cn(
                  "px-6 py-3 rounded-md text-sm font-medium transition-all duration-300",
                  filter === tab.id
                    ? "bg-neural-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
              isSelected={selectedProject?.id === project.id}
            />
          ))}
        </div>



        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
            <div className="glass-effect rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Project Image */}
              {selectedProject.image && (
                <div className="mb-6">
                  <div className="w-full rounded-lg overflow-hidden bg-gradient-to-br from-neural-500/20 to-synaptic-500/20">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full object-contain max-h-96"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="w-full h-64 flex items-center justify-center hidden">
                      <div className="text-4xl opacity-50">
                        {selectedProject.featured ? "⭐" : "💻"}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-neural-400 mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-neural-500/20 text-neural-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    className="px-6 py-3 bg-neural-500 text-white rounded-lg hover:bg-neural-600 transition-colors"
                  >
                    View Project
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    className="px-6 py-3 border border-neural-500 text-neural-400 rounded-lg hover:bg-neural-500/20 transition-colors"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
