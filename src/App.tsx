import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollContext } from "./shared/context/ScrollContext";
import { LandingSection } from "./features/landing";
import { AboutSection } from "./features/about";
import { ProjectsSection } from "./features/projects";
import { Navigation } from "./shared/components/Navigation";

function App() {
  const [currentSection, setCurrentSection] = useState("landing");

  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;
    let isHoveringScrollable = false;

    const handleScroll = () => {
      if (isScrolling) return;

      const sections = ["landing", "about", "projects"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // Check if hovering over scrollable areas
      const target = e.target as HTMLElement;
      const isOverScrollable = target.closest('.custom-scrollbar') !== null;
      const isOverModal = target.closest('[style*="overflow-y: auto"]') !== null || 
                         target.closest('.overflow-y-auto') !== null;
      
      if (isOverScrollable || isOverModal) {
        // Allow normal scrolling for skill grids and project modals
        return;
      }
      
      // Check if content overflows the viewport
      const currentSectionElement = document.getElementById(currentSection);
      if (currentSectionElement) {
        const sectionRect = currentSectionElement.getBoundingClientRect();
        const sectionHeight = currentSectionElement.scrollHeight;
        const viewportHeight = window.innerHeight;
        
        // If section content is taller than viewport, allow normal scrolling
        if (sectionHeight > viewportHeight) {
          // Check if we're at the top or bottom of the section
          const isAtTop = window.scrollY <= currentSectionElement.offsetTop;
          const isAtBottom = window.scrollY + viewportHeight >= currentSectionElement.offsetTop + sectionHeight;
          
          // Only allow smart scroll when at section boundaries
          if (!isAtTop && !isAtBottom) {
            return; // Allow normal scrolling within the section
          }
        }
      }
      
      // Only enable smart scrolling when going DOWN from landing page
      const direction = e.deltaY > 0 ? 1 : -1;
      const isGoingDown = direction > 0;
      const isOnLanding = currentSection === "landing";
      
      // If not going down from landing, allow normal scrolling
      if (!isOnLanding || !isGoingDown) {
        return;
      }
      
      e.preventDefault();
      
      if (isScrolling) return;
      
      const sections = ["landing", "about", "projects"];
      const currentIndex = sections.indexOf(currentSection);
      const nextIndex = Math.max(0, Math.min(sections.length - 1, currentIndex + direction));
      const nextSection = sections[nextIndex];
      
      if (nextSection !== currentSection) {
        isScrolling = true;
        setCurrentSection(nextSection);
        
        const element = document.getElementById(nextSection);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        
        // Debounce scroll events
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
        }, 1000);
      }
    };

    // Add wheel event listener with passive: false to allow preventDefault
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [currentSection]);

  return (
    <ScrollContext.Provider value={{ currentSection, setCurrentSection }}>
      <div className="flex flex-col">
        <Navigation />

        <main className="flex flex-col z-10">
          <LandingSection />
          <AboutSection />
          <ProjectsSection />
        </main>

        {/* Background Canvas */}
        <div className="fixed inset-0 -z-10">
          <Canvas
            camera={{ position: [0, 0, 8], fov: 60 }}
            className="bg-transparent"
          >
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={0.3} />
            <pointLight position={[-10, -10, -10]} intensity={0.2} />
          </Canvas>
        </div>
      </div>
    </ScrollContext.Provider>
  );
}

export default App;
