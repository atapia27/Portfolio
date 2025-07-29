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
    const handleScroll = () => {
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            style={{ background: "transparent" }}
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
