import { TabConfig, BackgroundCard } from "../types";

export const TAB_CONFIGS: TabConfig[] = [
  { id: "background", label: "Background", icon: "🎯" },
  { id: "skills", label: "Skills", icon: "⚡" },
  { id: "experience", label: "Experience", icon: "🚀" },
  { id: "resume", label: "Resume", icon: "⬇️" }
];

export const BACKGROUND_CARDS: BackgroundCard[] = [
  {
    icon: "✨",
    title: "My Focus",
    description: "I gravitate most towards frontend architecture and interface design, especially when the goal is to simplify complex systems or guide user decision-making. My background in cognitive science shapes how I approach everything from layout to interaction patterns.",
    gradientClass: "from-neural-400 to-neural-600",
    borderHoverClass: "hover:border-neural-400/30"
  },
  {
    icon: "🧠",
    title: "Cognitive Approach",
    description: "I think deeply about how people process information, what causes friction or hesitation, and how interface structure can either overwhelm or empower. For me, building good systems means more than technical correctness, it means aligning with how people actually think, feel, and behave under real-world conditions.",
    gradientClass: "from-synaptic-400 to-synaptic-600",
    borderHoverClass: "hover:border-synaptic-400/30"
  },
  {
    icon: "💡",
    title: "My Mission",
    description: "I care most about building systems that reduce friction, improve clarity, and support growth. My background in cognitive science has shaped how I think about design and decision-making, and I bring that perspective into every technical layer I work on. I'm especially motivated by roles where engineering choices have a real impact on both the tools teams rely on and the outcomes they help enable.",
    gradientClass: "from-cognitive-400 to-cognitive-600",
    borderHoverClass: "hover:border-cognitive-400/30"
  }
];

export const RESUME_CONFIG = {
  filename: "Alejandro_Tapia_Resume.pdf",
  path: "/Resume.pdf"
}; 