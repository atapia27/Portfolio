import { cn } from "../../../../shared/utils/cn";

export function HeroDescription() {
  return (
    <div
      className="text-sm md:text-base text-white leading-relaxed max-w-2xl mx-auto font-medium animate-description-fade-in animation-delay-3.5 opacity-0"
    >
      <div
        className="overflow-hidden animate-typewriter animation-delay-3.5 animation-duration-1.5"
      >
        Where Cognitive Science meets Computer Science.
      </div>
      <div
        className="overflow-hidden animate-typewriter animation-delay-5 animation-duration-1.5"
      >
        Building systems that understand how humans think, decide, and interact
        under complexity.
      </div>
    </div>
  );
}
