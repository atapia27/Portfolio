import { cn } from "../../../../shared/utils/cn";

export function HeroDescription() {
  return (
    <div
      className="text-sm md:text-base text-white leading-relaxed max-w-2xl mx-auto font-medium animate-description-fade-in"
      style={{
        animationDelay: "3.5s",
        opacity: 0,
      }}
    >
      <div
        className="overflow-hidden animate-typewriter"
        style={{
          animationDelay: "3.5s",
          animationDuration: "1.5s",
        }}
      >
        Where Cognitive Science meets Computer Science.
      </div>
      <div
        className="overflow-hidden animate-typewriter"
        style={{
          animationDelay: "5s",
          animationDuration: "1.5s",
        }}
      >
        Building systems that understand how humans think, decide, and interact
        under complexity.
      </div>
    </div>
  );
}
