import type { Project } from "../data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
      <div className="glass-effect rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-bold text-white">
            {project.title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
          >
            ×
          </button>
        </div>

        {/* Project Image */}
        {project.image && (
          <div className="mb-6">
            <div className="w-full rounded-lg overflow-hidden bg-gradient-to-br from-neural-500/20 to-synaptic-500/20">
              <img
                src={project.image}
                alt={project.title}
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
                  {project.featured ? "⭐" : "💻"}
                </div>
              </div>
            </div>
          </div>
        )}

        <p className="text-gray-300 mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-neural-400 mb-3">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
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
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-neural-500 text-white rounded-lg hover:bg-neural-600 transition-colors"
            >
              View Project
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-neural-500 text-neural-400 rounded-lg hover:bg-neural-500/20 transition-colors"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 