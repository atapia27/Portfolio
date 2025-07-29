import { cn } from "../../../../shared/utils/cn";

export function HeroTitle() {
  return (
    <div className="space-y-4 sm:space-y-6 py-4 sm:py-6 px-4 sm:px-0">
      <h1
        className="text-xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-9xl font-black tracking-[0.05em] sm:tracking-[0.1em] md:tracking-[0.15em] lg:tracking-[0.2em] text-center animate-spin-and-fade-in animation-delay-2.5 font-adventure text-portfolio-coral text-shadow-hero opacity-0 leading-tight sm:leading-normal"
        style={{
          animation: "spinAndFadeIn 1.5s linear forwards",
        }}
      >
        <div className="drop-shadow-2xl">Cognitive</div>
        <div className="drop-shadow-2xl">Engineering</div>
      </h1>
    </div>
  );
}
