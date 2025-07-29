import { cn } from "../../../../shared/utils/cn";

interface ExploreButtonProps {
  showButton: boolean;
}

export function ExploreButton({ showButton }: ExploreButtonProps) {
  return (
    <button
      onClick={() =>
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
      }
      className={cn(
        "px-8 py-3 border-white border-opacity-60 text-white rounded-xl text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-offset-4 focus:ring-offset-black relative group shadow-lg border-2 bg-black/30 backdrop-blur-sm hover:bg-black/40 focus:ring-white/30 font-courier animate-button-pulse",
        showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      <span className="flex items-center space-x-6">
        <span>Explore My Work</span>
        
        {/* Scroll Indicator */}
        <div className="flex animate-bounce">
          <div
            className={cn(
              "w-4 h-6 border border-neural-300 rounded-full flex justify-center",
            )}
          >
            <div
              className={cn(
                "w-0.5 h-2 rounded-full mt-1 animate-pulse",
                "bg-neural-300",
              )}
            ></div>
          </div>
        </div>
      </span>
    </button>
  );
}
