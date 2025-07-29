import { cn } from "../../../../shared/utils/cn";

export function HeroTitle() {
  return (
    <div className="space-y-6 py-6 ">
      <h1
        className="text-6xl md:text-9xl font-black tracking-[0.2em] text-center animate-spin-and-fade-in animation-delay-2.5 font-adventure text-portfolio-coral text-shadow-hero opacity-0"
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
