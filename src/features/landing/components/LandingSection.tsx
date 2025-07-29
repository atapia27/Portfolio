import { KeyPrinciples, ExploreButton, ScrollIndicator } from "./main";
import { Background3D } from "./main/Background3D";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

export function LandingSection() {
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="landing"
      className="section-container flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        playsInline
        loop={false}
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/AdventureTime.mp4" type="video/mp4" />
      </video>
      {/* 3D Background with Animated Text */}
      <Background3D />
      
            {/* Description Overlay - Fixed position, not affected by 3D rotation */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-[50vh] pointer-events-none">
        <div className="text-center">
          {showTypewriter && (
            <div className="bg-black/30 backdrop-blur-sm rounded-lg px-4 py-3 inline-block max-w-2xl">
                <TypeAnimation
                  sequence={[
                    "Hello, World!",
                    1500,                   
                    "Hello,",
                    1000,                   
                    "Hello, my name is Alex!",
                    1500,
                    "",
                    1000,
                    "I'm a Software Engineer, specializing in Frontend",
                    2000,
                    "",
                    1000,
                    "My approach is rooted in:\n cognitive science",                    
                    1500,
                    "My approach is rooted in:\n cognitive science + user research",                    
                    1500,
                    "My approach is rooted in:\n cognitive science + user research + empathy",      
                    2000,
                    "My approach is ",
                    1000,
                    "My approach is passionate and unique!",      
                    1500,
                    "",
                    1000,
                    "Please take a look around! :)"
                  ]}
                  wrapper="div"
                  cursor={true}
                  repeat={0}
                  speed={70}
                  className="text-white text-sm md:text-2xl tracking-widest font-normal whitespace-pre drop-shadow-xl font-adventure"
                />
              </div>
            )}
        </div>
      </div>
      {/* Bottom Content - Fixed to bottom */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex flex-col items-center space-y-6">
      <ExploreButton showButton={showTypewriter} />
        <ScrollIndicator />
      </div>
    </section>
  );
}
