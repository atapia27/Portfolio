import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ProjectCard } from "./ProjectCard";
import { ProjectVisualization } from "./ProjectVisualization";
import { cn } from "../../../shared/utils/cn";
import type { Project } from "../../../shared/types";

const projects: Project[] = [
  {
    id: "cognitive-interface",
    title: "Cognitive Interface System",
    description:
      "A user interface designed around human attention patterns and decision-making processes. Reduces cognitive load by 40% in complex workflows.",
    technologies: ["React", "TypeScript", "Three.js", "Cognitive Science"],
    image: "/api/placeholder/400/300",
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: "neural-dashboard",
    title: "Neural Dashboard",
    description:
      "Real-time data visualization system that adapts to user attention patterns and information processing preferences.",
    technologies: ["D3.js", "WebGL", "Python", "Machine Learning"],
    image: "/api/placeholder/400/300",
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: "decision-engine",
    title: "Decision Support Engine",
    description:
      "Backend system that processes complex data and presents it in ways that align with human decision-making patterns.",
    technologies: ["Node.js", "PostgreSQL", "GraphQL", "UX Research"],
    image: "/api/placeholder/400/300",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: "attention-tracker",
    title: "Attention Tracking System",
    description:
      "Research tool for studying how users process information under different conditions and stress levels.",
    technologies: ["React", "WebRTC", "Python", "Cognitive Psychology"],
    image: "/api/placeholder/400/300",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: "interaction-library",
    title: "Interaction Pattern Library",
    description:
      "Component library built with cognitive science principles, ensuring consistent and intuitive user experiences.",
    technologies: ["React", "Storybook", "TypeScript", "Design Systems"],
    image: "/api/placeholder/400/300",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: "complexity-reducer",
    title: "Complexity Reduction Tool",
    description:
      "AI-powered system that simplifies complex interfaces based on user behavior and cognitive load analysis.",
    technologies: ["TensorFlow", "React", "Python", "User Research"],
    image: "/api/placeholder/400/300",
    link: "#",
    github: "#",
    featured: false,
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<
    "all" | "featured" | "cognitive" | "technical"
  >("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "featured") return project.featured;
    if (filter === "cognitive")
      return (
        project.technologies.includes("Cognitive Science") ||
        project.technologies.includes("Cognitive Psychology")
      );
    if (filter === "technical")
      return (
        !project.technologies.includes("Cognitive Science") &&
        !project.technologies.includes("Cognitive Psychology")
      );
    return true;
  });

  return (
    <section id="projects" className="section-container py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Projects</span> & Research
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Exploring the intersection of cognitive science and technology
            through practical applications and research projects.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1 bg-gray-900/50 rounded-lg p-1">
            {[
              { id: "all", label: "All Projects" },
              { id: "featured", label: "Featured" },
              { id: "cognitive", label: "Cognitive Science" },
              { id: "technical", label: "Technical" },
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

        {/* 3D Visualization */}
        <div className="h-[500px] relative">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            className="bg-transparent"
          >
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={0.8} />
            <pointLight position={[-10, -10, -10]} intensity={0.3} />

            <ProjectVisualization
              selectedProject={selectedProject}
              projects={filteredProjects}
            />

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.3}
            />
          </Canvas>
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
