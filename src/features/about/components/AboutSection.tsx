import { useState } from "react";
import { TabNavigation } from "./TabNavigation";
import { TabContent } from "./TabContent";

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("background");

  return (
    <section
      id="about"
      className="section-container py-20 relative overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/fish.gif')" }}
    >
      {/* Enhanced overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 backdrop-blur-sm"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <h2 className="text-6xl font-bold mb-4 animate-fade-in">
              <span className="gradient-text">About</span> Me 
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neural-400 to-synaptic-400 mx-auto rounded-full"></div>
          </div>

          {/* Tab Navigation */}
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Tab Content */}
          <TabContent activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
}
