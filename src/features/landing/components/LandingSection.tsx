import { ExploreButton } from "./main";
import { Background3D } from "./main/Background3D";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

export function LandingSection() {
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const typewriterTimer = setTimeout(() => {
      setShowTypewriter(true);
    }, 3000);

    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 4500); // 3 seconds + 1.5 seconds = 4.5 seconds

    return () => {
      clearTimeout(typewriterTimer);
      clearTimeout(buttonTimer);
    };
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
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-[50vh] pointer-events-none px-4">
        <div className="text-center w-full max-w-2xl">
          {showTypewriter && (
            <div className="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-4 sm:py-3 inline-block w-full sm:w-auto">
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
                  className="text-white text-xs sm:text-sm md:text-2xl tracking-wider sm:tracking-widest font-normal whitespace-pre drop-shadow-xl font-adventure leading-relaxed"
                />
              </div>
            )}
        </div>
      </div>
      {/* Bottom Content - Fixed to bottom */}
      <div className="absolute bottom-16 sm:bottom-24 left-0 right-0 z-20 flex flex-col items-center px-4">
        <ExploreButton showButton={showButton} />
      </div>
    </section>
  );
}
