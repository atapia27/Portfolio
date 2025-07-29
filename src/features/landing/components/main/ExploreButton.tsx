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
        "px-8 py-3 border-white border-opacity-40 text-white rounded-xl text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-offset-4 focus:ring-offset-black relative group shadow-lg border-2 bg-portfolio-deep-purple hover:bg-portfolio-deep-purple-shade-1 focus:ring-portfolio-deep-purple font-courier animate-button-pulse",
        showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      <span className="flex flex-row items-center">
        <span>Explore My Work</span>
        <svg
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </span>
    </button>
  );
}
