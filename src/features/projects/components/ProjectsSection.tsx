import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilterTabs } from "./ProjectFilterTabs";
import { ProjectModal } from "./ProjectModal";
import { useProjectFilter } from "../hooks/useProjectFilter";
import type { Project } from "../data/projects";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { filter, setFilter, filteredProjects } = useProjectFilter();

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
        <ProjectFilterTabs filter={filter} onFilterChange={setFilter} />

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
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      </div>
    </section>
  );
}
