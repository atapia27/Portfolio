import { cn } from '../../../shared/utils/cn'
import type { Project } from '../../../shared/types'

interface ProjectCardProps {
  project: Project
  onClick: () => void
  isSelected: boolean
}

export function ProjectCard({ project, onClick, isSelected }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "glass-effect rounded-xl p-6 cursor-pointer transition-all duration-300",
        "hover:scale-105 hover:shadow-lg hover:shadow-neural-500/25",
        "transform hover:-translate-y-2",
        isSelected && "ring-2 ring-neural-400 shadow-neural-400/50"
      )}
    >
      {/* Project Image Placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-neural-500/20 to-synaptic-500/20 rounded-lg mb-4 flex items-center justify-center">
        <div className="text-4xl opacity-50">
          {project.featured ? '⭐' : '💻'}
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold text-white line-clamp-2">
            {project.title}
          </h3>
          {project.featured && (
            <span className="text-xs bg-cognitive-500/20 text-cognitive-300 px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>

        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-neural-500/20 text-neural-300 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs px-2 py-1 bg-gray-500/20 text-gray-300 rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 pt-2">
          {project.link && (
            <button className="text-xs px-3 py-1 bg-neural-500 text-white rounded-full hover:bg-neural-600 transition-colors">
              View
            </button>
          )}
          {project.github && (
            <button className="text-xs px-3 py-1 border border-neural-500 text-neural-400 rounded-full hover:bg-neural-500/20 transition-colors">
              Code
            </button>
          )}
        </div>
      </div>
    </div>
  )
} 