import { useScrollContext } from "../context/ScrollContext";
import { cn } from "../utils/cn";

const navItems = [
  { id: "landing", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
];

export function Navigation() {
  const { currentSection, setCurrentSection } = useScrollContext();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(sectionId);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 bg-black/20 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="px-[5%] flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text">Alex's Portfolio</div>

        <div className="flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-all duration-300",
                "hover:text-neural-400 focus:outline-none focus:ring-2 focus:ring-neural-400 focus:ring-offset-2 focus:ring-offset-black",
                currentSection === item.id
                  ? "text-neural-400"
                  : "text-gray-300 hover:text-neural-400",
              )}
            >
              {item.label}
              {currentSection === item.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neural-400 to-synaptic-400" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
