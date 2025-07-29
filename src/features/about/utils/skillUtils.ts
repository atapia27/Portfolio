export function getSkillGradientClass(category: string): string {
  switch (category) {
    case "Research Based Design":
      return "from-neural-400 to-neural-600";
    case "Frontend":
      return "from-synaptic-400 to-synaptic-600";
    case "Backend":
      return "from-cognitive-400 to-cognitive-600";
    case "AI and Machine Learning":
      return "from-green-400 to-green-600";
    default:
      return "from-neural-400 to-neural-600";
  }
}

export function getSkillColorClass(category: string): string {
  switch (category) {
    case "Research Based Design":
      return "text-neural-400";
    case "Frontend":
      return "text-synaptic-400";
    case "Backend":
      return "text-cognitive-400";
    case "AI and Machine Learning":
      return "text-green-400";
    default:
      return "text-cognitive-400";
  }
} 