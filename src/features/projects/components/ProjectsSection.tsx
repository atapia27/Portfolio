import { useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilterTabs } from "./ProjectFilterTabs";
import { ProjectModal } from "./ProjectModal";
import { useProjectFilter } from "../hooks/useProjectFilter";
import type { Project } from "../data/projects";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { filter, setFilter, filteredProjects } = useProjectFilter();

  // Toggle body overflow when modal is open/closed
  useEffect(() => {
    if (selectedProject) {
      // Modal is open - disable scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Modal is closed - re-enable scrolling
      document.body.style.overflow = '';
    }

    // Cleanup function to ensure overflow is restored when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="section-container py-12 sm:py-20 relative overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/background.gif')" }}
    >
      {/* Enhanced overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 backdrop-blur-sm"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="gradient-text">Projects</span> & Research
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            A collection of full-stack applications, tools, and projects showcasing
            modern web development, AI/ML integration, and user-focused design.
          </p>
        </div>

        {/* Filter Tabs */}
        <ProjectFilterTabs filter={filter} onFilterChange={setFilter} />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-16">
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
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      </div>
    </section>
  );
}
