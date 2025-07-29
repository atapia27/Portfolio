import { cn } from "../../../../shared/utils/cn";

const principles = [
  {
    icon: "🧠",
    title: "Human Cognition",
    description:
      "Understanding attention, decision-making, and information processing",
  },
  {
    icon: "⚡",
    title: "System Design",
    description:
      "Creating interfaces that reduce friction and build confidence",
  },
  {
    icon: "🔬",
    title: "Technical Excellence",
    description:
      "From backend data to frontend interfaces, every layer optimized",
  },
];

export function KeyPrinciples() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {principles.map((principle, index) => (
        <div
          key={index}
          className="rounded-xl text-center transform transition-all duration-500 hover:scale-105 bg-white/10 border border-white/20 p-3 backdrop-blur-md"
        >
          <div className="text-2xl">{principle.icon}</div>
          <h3 className="text-lg font-semibold mb-4 text-neural-400">
            {principle.title}
          </h3>
          <p className="text-sm text-gray-300">{principle.description}</p>
        </div>
      ))}
    </div>
  );
}
