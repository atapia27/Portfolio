import { 
  HeroTitle,
  HeroDescription,
  KeyPrinciples,
  ExploreButton,
  ScrollIndicator
} from './main'

export function LandingSection() {
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
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/AdventureTime.mp4" type="video/mp4" />
      </video>
      
      {/* Content Overlay */}
      <div className=" z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">
        <div className="space-y-80">
          {/* Title and Description Block */}
          <div className="space-y-2">
            <HeroTitle />
            <HeroDescription />
          </div>
          
          {/* Key Principles and Button Block */}
          <div className="">
            <ExploreButton />
          </div>
        </div>
      </div>

      {/* 5. Scroll Indicator Component */}
      <ScrollIndicator />
    </section>
  )
} 