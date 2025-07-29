export interface SkillGroup {
  category: string;
  icon: string;
  items: string[];
}

export const skills: SkillGroup[] = [
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