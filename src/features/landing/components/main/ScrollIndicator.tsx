import { cn } from "../../../../shared/utils/cn";

export function ScrollIndicator() {
  return (
    <div className="flex animate-bounce">
      <div
        className={cn(
          "w-6 h-10 border-2 rounded-full flex justify-center",
          "border-neural-300",
        )}
      >
        <div
          className={cn(
            "w-1 h-3 rounded-full mt-2 animate-pulse",
            "bg-neural-300",
          )}
        ></div>
      </div>
    </div>
  );
}
